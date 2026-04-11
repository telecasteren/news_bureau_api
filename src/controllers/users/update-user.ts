import { pool } from "../../config/database.js";
import { asyncHandler } from "../../utils/async-handler.js";
import { ApiError } from "../../middleware/error/api-error.js";
import { sendUserResponse } from "../../utils/send-user-response.js";
import type { User } from "../../models/user.js";

/**
 * Updates fields on the authenticated user's own account.
 *
 * Only `email` is currently supported, but the function is kept scalable.
 * Returns 403 if the params ID does not match `req.user.id`.
 * Returns 400 if no supported fields are provided.
 */
export const updateUser = asyncHandler(async (req, res) => {
  const userId = Number(req.params.id);
  const userEmail = req.body.email;

  if (userId !== req.user.id) {
    throw new ApiError(
      "Not allowed. Users can only update their own data",
      403,
    );
  }

  const fields = [];
  const values = [];

  // scalable for more fields like username etc
  if (userEmail) {
    fields.push("email = ?");
    values.push(userEmail);
  }

  if (fields.length === 0) {
    throw new ApiError("No fields to update", 400);
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
