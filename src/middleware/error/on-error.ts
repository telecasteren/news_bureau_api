import { Request, Response, NextFunction } from "express";
import { ApiError } from "./api-error.js";

export const onError = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ error: err.message, details: err.details });
  }

  const message = err instanceof Error ? err.message : "Something went wrong";

  res.status(500).json({
    error: "Internal server error",
    message:
      process.env.NODE_ENV === "development" ? message : "Something went wrong",
  });
};
