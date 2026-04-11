import { ResultSetHeader } from "mysql2";
import { pool } from "../../config/database.js";
import bcrypt from "bcrypt";
import type { User } from "../../models/user.js";
import { asyncHandler } from "../../utils/async-handler.js";
import { ApiError } from "../../middleware/error/api-error.js";
import { sendUserResponse } from "../../utils/send-user-response.js";

export const registerUser = asyncHandler(async (req, res) => {
  const created_at = new Date();
  const { email = null, password = null } = req.body;

  if (!email || !password) {
    throw new ApiError("Email and password is required", 400);
  }

  let [rows] = await pool.execute("SELECT email FROM users WHERE email = ?", [
    email,
  ]);

  const existingUsers = rows as User[];
  if (existingUsers.length > 0) {
    throw new ApiError("User with this email already exists", 409);
  }

  const saltRounds = 10;
  const password_hash = await bcrypt.hash(password, saltRounds);

  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO users (email, password_hash, created_at) VALUES (?, ?, ?)`,
    [email, password_hash, created_at],
  );

  [rows] = await pool.execute("SELECT id, email FROM users WHERE id = ?", [
    result.insertId,
  ]);
  const updatedUser = (rows as User[])[0];

  sendUserResponse(
    res,
    updatedUser,
    "User registered successfully",
    undefined,
    201,
  );
});
