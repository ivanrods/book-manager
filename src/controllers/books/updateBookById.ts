import db from "../../database/knex";
export async function UpdateBookById(req: any, res: any) {
  const { id } = req.params;

  const { title, description, cover, rating, author_id, year } = req.body;
  try {
    const updated = await db("books")
      .where({ id })
      .update({ title, description, cover, rating, author_id, year });
    if (!updated) {
      return res.status(401).json({ message: "Livro não encontrado." });
    }
    return res.json({ message: "Livro atualizado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar livro." });
  }
}
