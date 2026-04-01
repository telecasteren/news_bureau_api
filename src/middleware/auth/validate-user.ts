import { Request, Response, NextFunction } from "express";
import type { User } from "../../models/user.js";

export const validateUserId = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userId = Number(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }
  next();
};

export const validateUserEmail = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body as { email?: User["email"] };
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (typeof email !== "string" || email.trim() === "") {
    return res.status(400).json({ error: "Email is required" });
  }

  if (!isValid.test(email)) {
    return res.status(400).json({ error: "Email format is invalid" });
  }
  next();
};
