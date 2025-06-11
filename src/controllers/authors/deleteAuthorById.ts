import db from "../../database/knex";
export async function DeleteAuthorById(req: any, res: any) {
  const { id } = req.params;
  try {
    const deleted = await db("authors").where({ id }).del();
    if (!deleted) {
      return res.status(401).json({ message: "Autor não encontrado." });
    }
    return res.json({ message: "Autor deletado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar Autor." });
  }
}