import db from "../../database/knex";
export async function CreateAuthor(req: any, res: any) {
  const { name } = req.body;
  const [id] = await db("authors").insert({ name });
  return res.status(201).json({ message: "Autor criado com sucesso!", id });
}