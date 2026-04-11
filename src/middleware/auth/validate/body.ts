import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validateBody =
  (schema: z.ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const missingFields = result.error.issues
        .filter(
          (issue) =>
            issue.code === "invalid_type" && issue.expected !== "undefined",
        )
        .map((issue) => issue.path[0]);

      if (missingFields.length > 0) {
        return res.status(400).json({
          error: "Validation failed",
          details: result.error.issues.map(
            (issue) => `${issue.path} is required`,
          ),
        });
      }

      return res.status(400).json({
        error: "Validation failed",
        details: result.error.issues.map((issue) => issue.message),
      });
    }

    req.body = result.data;
    next();
  };
