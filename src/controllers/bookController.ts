import { Request, Response } from "express";
import db from "../database/knex";


export async function getAllBooks(_req: any, res: any) {
  try {
    const books = await db("books").select("*");
    return res.json(books);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar livros." });
  }
}

export async function getBookById(req:any, res: any) {
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

export async function CreateBook(req:any, res: any) {
  const { title, author, year } = req.body;
  try {
    await db("books").insert({ title, author, year });
    return res.status(201).json({ message: "Livro criado com sucesso!" });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar livros." });
  }
}

export async function UpdateBookById(req:any, res: any) {
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

export async function DeleteBookById(req:any, res: any) {
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
