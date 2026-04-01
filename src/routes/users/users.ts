import { Router } from "express";
import { validateToken } from "../../middleware/auth/validate-token.js";
import {
  validateUserId,
  validateUserEmail,
} from "../../middleware/auth/validate-user.js";
import {
  getAllUsers,
  getUserById,
  updateUser,
  queryUsers,
  deleteUser,
} from "../../controllers/usersController.js";

const router = Router();

// All routes protected
router.get("/search", validateToken, queryUsers);
router.get("/:id", validateToken, getUserById);
router.get("/", validateToken, getAllUsers);
router.patch(
  "/:id",
  validateToken,
  validateUserId,
  validateUserEmail,
  updateUser,
);
router.delete("/:id", validateToken, deleteUser);

export default router;
