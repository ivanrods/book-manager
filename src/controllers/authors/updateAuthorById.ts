import db from "../../database/knex";
export async function UpdateAuthorById(req: any, res: any) {
  const { id } = req.params;

  const { name } = req.body;
  try {
    const updated = await db("authors")
      .where({ id })
      .update({ name });
    if (!updated) {
      return res.status(401).json({ message: "Author não encontrado." });
    }
    return res.json({ message: "Autor atualizado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar autor." });
  }
}