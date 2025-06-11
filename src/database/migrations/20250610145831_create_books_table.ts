import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("books", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable().unique();
    table.text("description").nullable();
    table.string("cover").nullable();
    table.decimal("rating", 2, 1).nullable();
    table
      .integer("author_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("authors")
      .onDelete("CASCADE");
    table.integer("year").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("books");
}
