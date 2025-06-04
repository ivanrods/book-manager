import db from "../../database/knex";
export async function GetAllBooks(_req: any, res: any) {
  try {
    const books = await db("books").select("*");
    return res.json(books);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar livros." });
  }
}
