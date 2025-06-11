import db from "../../database/knex";
export async function GetAllAuthors(_req: any, res: any) {
  try {
    const authors = await db("authors").select("*");
    return res.json(authors);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar autores." });
  }
}