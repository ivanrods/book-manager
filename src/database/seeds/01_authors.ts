import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void>{
    await knex("authors").del();

    await knex("authors").insert([
    { id: 1, name: "Machado de Assis" },
    { id: 2, name: "Clarice Lispector" },
    { id: 3, name: "Graciliano Ramos" }
  ]);
}