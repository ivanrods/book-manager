import db from "../../database/knex";
export async function DeleteBookById(req: any, res: any) {
  const { id } = req.params;
  try {
    const deleted = await db("books").where({ id }).del();
    if (!deleted) {
      return res.status(401).json({ message: "Livro não encontrado." });
    }
    return res.json({ message: "Livro deletado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar livros." });
  }
}
