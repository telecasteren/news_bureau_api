import { pool } from "../../config/database.js";
import type { User } from "../../models/user.js";
import { asyncHandler } from "../../utils/async-handler.js";

export const getUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const [rows] = await pool.execute(
    "SELECT id, email, created_at FROM users WHERE id = ?",
    [id],
  );
  const users = rows as User[];
  res.json(users);
});
