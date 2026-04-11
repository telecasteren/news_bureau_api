import { pool } from "../../config/database.js";
import { asyncHandler } from "../../utils/async-handler.js";
import { ApiError } from "../../middleware/error/api-error.js";
import type { Article } from "../../models/article.js";

/**
 * Deletes an existing article owned by the authenticated user.
 *
 * Returns:
 * - 400 if required identifiers are missing
 * - 404 if the article is not found
 * - 403 if the authenticated user is not the author
 */
export const deleteArticle = asyncHandler(async (req, res) => {
  const articleId = Number(req.params.id);
  const userId = req.user.id;

  if (!articleId || !userId) {
    throw new ApiError("Article ID and User ID are required", 400);
  }

  const [rows] = await pool.execute(
    "SELECT submitted_by FROM articles WHERE id = ?",
    [articleId],
  );
  const articles = rows as Article[];
  const article = articles[0];

  if (!article) {
    throw new ApiError("Article not found", 404);
  }

  const authorId = Number(article.submitted_by);

  if (authorId !== userId) {
    throw new ApiError(
      "Not allowed. Users can only delete their own articles",
      403,
    );
  }

  await pool.execute(`DELETE FROM articles WHERE id = ?`, [articleId]);

  res.status(200).json({
    message: "Article deleted successfully",
    id: articleId,
  });
});
