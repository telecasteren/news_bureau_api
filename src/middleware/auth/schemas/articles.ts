import { z } from "zod";

const articleIdSchema = z.object({
  id: z.coerce.number().int().positive(),
});

const articleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
});

const partialArticleSchema = z
  .object({
    title: z.coerce.string().optional(),
    body: z.coerce.string().optional(),
    category: z.coerce.string().optional(),
  })
  .refine(
    (data) =>
      data.title !== undefined ||
      data.body !== undefined ||
      data.category !== undefined,
    {
      message: "At least one of title, body or category must be present",
      path: [],
    },
  );

export { articleIdSchema, articleSchema, partialArticleSchema };
