import db from "../../database/knex";
export async function CreateBook(req: any, res: any) {
  const { title, author_id, year } = req.body;
  const [id] = await db("books").insert({ title, author_id, year });
  return res.status(201).json({ message: "Livro criado com sucesso!", id });
}
