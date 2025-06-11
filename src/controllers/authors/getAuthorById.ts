import db from "../../database/knex";

export async function GetAuthorById(req: any, res: any) {
  const { id } = req.params;
  try {
    const author = await db("authors").where({ id }).first();
    if (!author) {
      return res.status(401).json({ message: "Autor não encontrado." });
    }
    return res.json(author);

  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar autor." });
  }
}