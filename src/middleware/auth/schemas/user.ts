import { z } from "zod";

const loginSchema = z.object({
  email: z.email("Email must be a valid email"),
  password: z.string(),
});

const registerSchema = z.object({
  email: z.email("Email must be a valid email"),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
      "Password must at least contain 8 characters of uppercase and lowercase letter, a number and a special character",
    ),
});

const userTokenSchema = z.object({
  token: z
    .string()
    .regex(
      /^Bearer [A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/,
      "Token format must be: Bearer <JWT>",
    ),
});

const userIdParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});

const userEmailSchema = z.object({
  email: z.email("Email must be a valid email"),
});

// scalable for PATCH routes
const partialUserDataSchema = z.object({
  email: z.email("Email must be a valid email").optional(),
});

export {
  registerSchema,
  loginSchema,
  userTokenSchema,
  userEmailSchema,
  userIdParamSchema,
  partialUserDataSchema,
};
