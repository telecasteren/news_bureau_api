import { pool } from "../../config/database.js";
import bcrypt from "bcrypt";
import type { User } from "../../models/user.js";
import { asyncHandler } from "../../utils/async-handler.js";
import { ApiError } from "../../middleware/error/api-error.js";
import { generateToken } from "../../middleware/auth/jwt/generate-token.js";
import { sendUserResponse } from "../../utils/send-user-response.js";

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body as {
    email: User["email"];
    password: string;
  };

  if (typeof password !== "string" || password.trim() === "") {
    throw new ApiError("Password is required", 400);
  }

  // find user in db and match password with bcrypt
  const [rows] = await pool.execute(
    "SELECT id, email, password_hash FROM users WHERE email = ?",
    [email],
  );
  const users = rows as User[];
  const user = users[0];

  if (!user) {
    throw new ApiError("Invalid credentials, user doesn't exist", 401);
  }

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) {
    throw new ApiError("Invalid credentials, wrong password", 401);
  }

  const token = generateToken(user.id);
  const userResponse = {
    id: user.id,
    email: user.email,
    created_at: user.created_at,
  };

  sendUserResponse(res, userResponse, "Login successful", token);
});
