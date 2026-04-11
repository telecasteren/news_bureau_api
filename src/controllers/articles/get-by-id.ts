import { pool } from "../../config/database.js";
import { asyncHandler } from "../../utils/async-handler.js";
import { ApiError } from "../../middleware/error/api-error.js";
import type { ArticleWithUser } from "../../models/article.js";

export const getArticleById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const [rows] = await pool.execute(
    `
    SELECT
    a.id, a.title, a.body, a.category, a.created_at, a.submitted_by, u.email
    FROM articles a
    JOIN users u ON a.submitted_by = u.id
    WHERE a.id = ?`,
    [id],
  );
  const articles = rows as ArticleWithUser[];
  const article = articles[0];

  if (!article) {
    throw new ApiError("Article not found.", 404);
  }

  res.json(article);
});
