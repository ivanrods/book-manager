import request from "supertest";
import app from "../src/app";

describe("Authors API", () => {
  //teste getAll
  it("deve retornar status 200 ao buscar todos os authors", async () => {
    const getAllAuthors = await request(app).get("/authors");
    expect(getAllAuthors.status).toBe(200);
  });

  //teste getById
  it("deve retornar status 200 ao buscar um author por ID", async () => {
    const createAuthor = await request(app).post("/authors").send({
      name: "Autor criado",
    });

    const authorId = createAuthor.body.id;

    const getAuthorByid = await request(app).get(`/authors/${authorId}`);
    expect(getAuthorByid.status).toBe(200);
  });

  //test create
  it("deve retornar status 200 ao criar um Autor", async () => {
    const createAuthor = await request(app).post("/authors").send({
     name: "Autor criado",
    });
    expect(createAuthor.status).toBe(201);
  });

  //teste update
  it("deve retornar status 200 ao atualizar um livro", async () => {
    const createAuthor = await request(app).post("/authors").send({
      name: "Autor criado",
    });

    const authorId = createAuthor.body.id;

    const updateAuthor = await request(app).patch(`/authors/${authorId}`).send({
      name: "Autor atualizado",
    });

    expect(updateAuthor.status).toBe(200);
  });

  //teste delete
    it("deve retornar status 200 ao deletar um livro", async () => {
    const createAuthor = await request(app).post("/authors").send({
      name: "Autor criado",
    });

    const authorId = createAuthor.body.id;

    const deleteAuthor = await request(app).delete(`/authors/${authorId}`)

    expect(deleteAuthor.status).toBe(200);
  });
});


