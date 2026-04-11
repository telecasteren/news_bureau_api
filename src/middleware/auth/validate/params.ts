import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validateParams =
  (schema: z.ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.params);

    if (!result.success) {
      return res.status(400).json({
        error: "Validation failed",
        details: result.error.issues.map((issue) => issue.message),
      });
    }

    Object.assign(req.params, result.data);
    next();
  };
