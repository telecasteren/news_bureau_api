import { ResultSetHeader } from "mysql2";
import { pool } from "../../config/database.js";
import { asyncHandler } from "../../utils/async-handler.js";
import { ApiError } from "../../middleware/error/api-error.js";

/**
 * Creates a new article for the authenticated user.
 *
 * Returns:
 * - 401 if no authenticated user is available on the request
 */
export const postArticle = asyncHandler(async (req, res) => {
  const { title = null, body = null, category = null } = req.body;
  const submitted_by = req.user.id;
  const created_at = new Date();

  if (!submitted_by) {
    throw new ApiError("Authenticated user is required", 401);
  }

  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO articles (title, body, category, submitted_by, created_at)
      VALUES (?, ?, ?, ?, ?)`,
    [title, body, category, submitted_by, created_at],
  );

  res.status(201).json({
    message: "Article created successfully",
    articleId: result.insertId,
  });
});
