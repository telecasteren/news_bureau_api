import { pool } from "../../config/database.js";
import { asyncHandler } from "../../utils/async-handler.js";
import { ApiError } from "../../middleware/error/api-error.js";
import type { ArticleWithUser } from "../../models/article.js";

export const getAllArticles = asyncHandler(async (req, res) => {
  const [rows] = await pool.execute(`
    SELECT
    a.id, a.title, a.body, a.category, a.created_at, a.submitted_by, u.email
    FROM articles a
    JOIN users u ON a.submitted_by = u.id`);
  const articles = rows as ArticleWithUser[];

  if (!articles.length) {
    throw new ApiError("No articles found.", 404);
  }

  res.json(articles);
});
