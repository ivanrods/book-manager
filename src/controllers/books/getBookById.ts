import db from "../../database/knex";

export async function GetBookById(req: any, res: any) {
  const { id } = req.params;
  try {
    const books = await db("books").where({ id }).first();
    if (!books) {
      return res.status(401).json({ message: "Livro não encontrado." });
    }
    return res.json(books);

  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar livros." });
  }
}
