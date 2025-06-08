import request from "supertest";
import db from "../src/database/knex";
import app from "../src/app";


describe("Books API", () => {
  //teste getAll
  it("deve retornar status 200 ao buscar todos os livros", async () => {
    const getAllBook = await request(app).get("/books");
    expect(getAllBook.status).toBe(200);
  });

  //teste getById
  it("deve retornar status 200 ao buscar um livro por ID", async () => {
    const createBook = await request(app).post("/books").send({
      title: "Livro Teste",
      author: "Autor Teste",
      year: 2021,
    });

    const bookId = createBook.body.id;

    const getBookByid = await request(app).get(`/books/${bookId}`);
    expect(getBookByid.status).toBe(200);
  });

  //test create
  it("deve retornar status 200 ao criar um livro", async () => {
    const createBook = await request(app).post("/books").send({
      title: "Livro Teste",
      author: "Autor Teste",
      year: 2021,
    });
    expect(createBook.status).toBe(201);
  });

  //teste update
  it("deve retornar status 200 ao atualizar um livro", async () => {
    const createBook = await request(app).post("/books").send({
      title: "Livro Teste",
      author: "Autor Teste",
      year: 2021,
    });

    const bookId = createBook.body.id;

    const updateBook = await request(app).patch(`/books/${bookId}`).send({
      title: "Livro Teste",
      author: "Autor Teste",
      year: 2021,
    });

    expect(updateBook.status).toBe(200);
  });

  //teste delete
    it("deve retornar status 200 ao deletar um livro", async () => {
    const createBook = await request(app).post("/books").send({
      title: "Livro Teste",
      author: "Autor Teste",
      year: 2021,
    });

    const bookId = createBook.body.id;

    const deleteBook = await request(app).delete(`/books/${bookId}`)

    expect(deleteBook.status).toBe(200);
  });
});


afterAll(async () => {
  await db.destroy();
});