import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  author: z.string().min(1, "Autor é obrigatório"),
  year: z.number().int().gte(0, "Ano deve ser um número inteiro positivo"),
});

export type BookInput = z.infer<typeof bookSchema>;
