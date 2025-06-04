import db from "../../database/knex";
export async function UpdateBookById(req: any, res: any) {
  const { id } = req.params;

  const { title, author, year } = req.body;
  try {
    const updated = await db("books")
      .where({ id })
      .update({ title, author, year });
    if (!updated) {
      return res.status(401).json({ message: "Livro não encontrado." });
    }
    return res.json({ message: "Livro atualizado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar livro." });
  }
}
