import { pool } from "../config/database.js";
import { asyncHandler } from "../utils/async-handler.js";
import { sendUserResponse } from "../utils/send-user-response.js";
import type { User } from "../models/user.js";

// GET all users from users table
const getAllUsers = asyncHandler(async (req, res) => {
  const [rows] = await pool.execute("SELECT id, email, created_at FROM users");
  const users = rows as User[];
  res.json(users);
});

// GET single user by id from users table
const getUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const [rows] = await pool.execute(
    "SELECT id, email, created_at FROM users WHERE id = ?",
    [id],
  );
  const users = rows as User[];
  res.json(users);
});

// PATCH one or more column at user in users table
// scalable for multiple fields so it can support PUT requests
const updateUser = asyncHandler(async (req, res) => {
  const userId = Number(req.params.id);

  // only allow user to edit their own data
  if (userId !== req.user.id) {
    return res.status(403).json({
      error: "Not allowed. Users can only update their own data",
    });
  }

  const fields = [];
  const values = [];

  if (req.body.email) {
    fields.push("email = ?");
    values.push(req.body.email);
  }

  if (fields.length === 0) {
    return res.status(400).json({ error: "No fields to update" });
  }

  values.push(userId);

  await pool.execute(
    `UPDATE users SET ${fields.join(", ")} WHERE id = ?`,
    values,
  );

  const [rows] = await pool.execute(
    "SELECT id, email FROM users WHERE id = ?",
    [userId],
  );
  const users = rows as User[];
  const updatedUser = users[0];

  sendUserResponse(res, updatedUser, "User updated successfully");
});

// Query users by email in users table, structure: /users/search?email=user@email.no
const queryUsers = asyncHandler(async (req, res) => {
  const email =
    typeof req.query.email === "string" ? req.query.email : undefined;

  if (email) {
    const [rows] = await pool.execute(
      "SELECT id, email, created_at FROM users WHERE LOWER(email) = LOWER(?)",
      [email],
    );
    const users = rows as User[];
    return res.json(users);
  }
  return res.status(400).json({ error: "Email query parameter is required" });
});

// DELETE user from users table
const deleteUser = asyncHandler(async (req, res) => {
  const userId = Number(req.params.id);

  if (!userId) {
    return res.status(400).json({
      error: "User ID is required",
    });
  }

  // only allow user to edit their own data
  if (userId !== req.user.id) {
    return res.status(403).json({
      error: "Not allowed. Users can only delete their own user",
    });
  }

  await pool.execute(`DELETE FROM users WHERE id = ?`, [userId]);

  res.status(200).json({
    message: "User deleted successfully",
    id: userId,
  });
});

export { getAllUsers, getUserById, updateUser, queryUsers, deleteUser };
