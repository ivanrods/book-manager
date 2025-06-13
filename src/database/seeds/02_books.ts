import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

  await knex("books").del();

  await knex("books").insert([
    {
      title: "Dom Casmurro",
      description: "Romance psicológico sobre ciúmes e traição.",
      cover: "https://exemplo.com/domcasmurro.jpg",
      year: 1899,
      author_id: 1
    },
    {
      title: "A Hora da Estrela",
      description: "A história de Macabéa, uma nordestina no Rio.",
      cover: "https://exemplo.com/ahoradaestrela.jpg",
      year: 1977,
      author_id: 2
    },
    {
      title: "Vidas Secas",
      description: "Relato da vida difícil no sertão brasileiro.",
      cover: "https://exemplo.com/vidassecas.jpg",
      year: 1938,
      author_id: 3
    }
  ]);
}
