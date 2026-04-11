import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validateQuery =
  (schema: z.ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      return res.status(400).json({
        error: "Validation failed",
        details: result.error.issues.map((issue) => issue.message),
      });
    }

    Object.assign(req.query, result.data);
    next();
  };
