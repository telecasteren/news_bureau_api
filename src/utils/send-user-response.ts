import type { Response } from "express";
import type { UserResponse } from "../models/user.js";

export function sendUserResponse(
  res: Response,
  user: UserResponse,
  message: string,
  token?: string,
  status: number = 200,
) {
  res.status(status).json({
    message,
    user,
    token,
  });
}
