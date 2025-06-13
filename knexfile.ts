import type { Knex } from "knex";
import path from "path";

import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: process.env.DATABASE_URL!,
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: process.env.DATABASE_URL!,
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
  },
};
export default config;
