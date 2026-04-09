import { pool } from "../../config/database.js";
import { asyncHandler } from "../../utils/async-handler.js";
import type { Article } from "../../models/article.js";

export const getArticleById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const [rows] = await pool.execute("SELECT * FROM articles WHERE id = ?", [
    id,
  ]);
  const articles = rows as Article[];
  const article = articles[0];

  if (!article) {
    return res.status(404).json({ error: "Article not found." });
  }

  res.json(article);
});
