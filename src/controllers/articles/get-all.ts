import { pool } from "../../config/database.js";
import { asyncHandler } from "../../utils/async-handler.js";
import { ApiError } from "../../middleware/error/api-error.js";
import type { Article } from "../../models/article.js";

export const getAllArticles = asyncHandler(async (req, res) => {
  const [rows] = await pool.execute("SELECT * FROM articles");
  const articles = rows as Article[];

  if (!articles.length) {
    throw new ApiError("No articles found.", 404);
  }

  res.json(articles);
});
