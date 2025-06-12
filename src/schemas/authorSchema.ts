import { z } from "zod";

export const authorSchema = z.object({
 name: z.string().min(1, "Nome do autor é obrigatório"),
});

export type AuthorInput = z.infer<typeof authorSchema>;
