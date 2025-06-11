import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().optional(),
  cover: z.string().url("Capa deve ser uma URL válida").optional(),
  rating: z.number().min(0).max(5).optional(),
  author_id: z.number({ required_error: "ID do autor é obrigatório" }),
  year: z.number().int().gte(0, "Ano deve ser um número inteiro positivo"),
});

export type BookInput = z.infer<typeof bookSchema>;
