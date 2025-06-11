import request from "supertest";
import app from "../src/app";
import db from "./jest.setup";

describe("Books API", () => {
  //teste getAll
  it("deve retornar status 200 ao buscar todos os livros", async () => {
    const getAllBook = await request(app).get("/books");
    expect(getAllBook.status).toBe(200);
  });

  //teste getById
  it("deve retornar status 200 ao buscar um livro por ID", async () => {
    const createAuthor = await request(app).post("/authors").send({
      name: "Autor Teste",
    });
    const authorId = createAuthor.body.id;
    const createBook = await request(app).post("/books").send({
      title: "Livro Teste",
      description: "Descrição de teste",
      cover: "Capa de teste",
      author_id: authorId,
      year: 2025,
    });

    const bookId = createBook.body.id;

    const getBookByid = await request(app).get(`/books/${bookId}`);
    expect(getBookByid.status).toBe(200);
  });

  //test create
  it("deve retornar status 200 ao criar um livro", async () => {
    const createAuthor = await request(app).post("/authors").send({
      name: "Autor criado",
    });
    const authorId = createAuthor.body.id;

    const createBook = await request(app).post("/books").send({
      title: "Livro Teste",
      description: "Descrição de teste",
      cover: "Capa de teste",
      author_id: authorId,
      year: 2025,
    });
    expect(createBook.status).toBe(201);
  });

  //teste update
  it("deve retornar status 200 ao atualizar um livro", async () => {
    const createAuthor = await request(app).post("/authors").send({
      name: "Autor Teste",
    });
    const authorId = createAuthor.body.id;
    const createBook = await request(app).post("/books").send({
      title: "Livro Teste",
      description: "Descrição de teste",
      cover: "Capa de teste",
      author_id: authorId,
      year: 2025,
    });

    const bookId = createBook.body.id;

    const updateBook = await request(app).patch(`/books/${bookId}`).send({
      title: "Livro este atualizado",
      description: "Descrição de teste atualizada",
      cover: "Capa de teste atualizada",
      author_id: authorId,
      year: 2024,
    });

    expect(updateBook.status).toBe(200);
  });

  //teste delete
  it("deve retornar status 200 ao deletar um livro", async () => {
    const createAuthor = await request(app).post("/authors").send({
      name: "Autor Teste",
    });
    const authorId = createAuthor.body.id;
    const createBook = await request(app).post("/books").send({
      title: "Livro Teste",
      description: "Descrição de teste",
      cover: "Capa de teste",
      author_id: authorId,
      year: 2025,
    });

    const bookId = createBook.body.id;

    const deleteBook = await request(app).delete(`/books/${bookId}`);

    expect(deleteBook.status).toBe(200);
  });
});

afterAll(async () => {
  await db.destroy();
});
