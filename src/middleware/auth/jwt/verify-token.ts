import jwt from "jsonwebtoken";
import { tokenSchema } from "../schemas/auth.js";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is required");
}

export const verifyToken = (token: string) => {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const parsed = tokenSchema.safeParse(payload);

    if (!parsed.success) return null;

    return parsed.data;
  } catch (error) {
    return null;
  }
};
