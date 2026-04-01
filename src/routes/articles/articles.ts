import { Router } from "express";
import { validateToken } from "../../middleware/auth/validate-token.js";
import {
  getAllArticles,
  getArticleById,
  queryArticle,
  postArticle,
  updateArticle,
  deleteArticle,
} from "../../controllers/articlesController.js";

const router = Router();

router.get("/search", queryArticle);
router.get("/:id", getArticleById);
router.get("/", getAllArticles);
router.post("/", validateToken, postArticle); // Protected route
router.put("/:id", validateToken, updateArticle); // Protected route
router.delete("/:id", validateToken, deleteArticle); // Protected route

export default router;
