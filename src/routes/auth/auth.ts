import { Router } from "express";
import { loginUser, registerUser } from "../../controllers/authController.js";
import { validateUserEmail } from "../../middleware/auth/validate-user.js";

const router = Router();

router.post("/login", validateUserEmail, loginUser);
router.post("/register", registerUser);

export default router;
