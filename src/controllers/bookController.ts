import { Request, Response } from "express";
import db from "../database/knex";
import { bookSchema } from "../schemas/bookSchema";

export async function getAllBooks(_req: any, res: any) {
  try {
    const books = await db("books").select("*");
    return res.json(books);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar livros." });
  }
}

export async function getBookById(req: any, res: any) {
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

export async function CreateBook(req: any, res: any) {
  //bookSchema = {title, author, year}
  const data = bookSchema.parse(req.body);
  try {
    await db("books").insert(data);
    return res.status(201).json({ message: "Livro criado com sucesso!" });
  } catch (error) {
    if (error instanceof Error && "errors" in error) {
      return res
        .status(400)
        .json({ error: "Dados inválidos", details: (error as any).errors });
    }
    return res.status(500).json({ error: "Erro ao criar livros." });
  }
}

export async function UpdateBookById(req: any, res: any) {
  const { id } = req.params;

  const data = bookSchema.parse(req.body);
  try {
    const updated = await db("books").where({ id }).update(data);
    if (!updated) {
      return res.status(401).json({ message: "Livro não encontrado." });
    }
    return res.json({ message: "Livro atualizado com sucesso!" });
  } catch (error) {
    if (error instanceof Error && "errors" in error) {
      return res
        .status(400)
        .json({ error: "Dados inválidos", details: (error as any).errors });
    }
    return res.status(500).json({ error: "Erro ao atualizar livro." });
  }
}

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
