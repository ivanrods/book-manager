import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

import knex from "knex";
import knexfile from "../knexfile";

const db = knex(knexfile.test);

beforeAll(async () => {
  await db.migrate.rollback(undefined, true);
  await db.migrate.latest();
});

beforeEach(async () => {
  await db("books").del();
  await db("authors").del();
});

afterAll(async () => {
  await db.destroy();
});

export default db;