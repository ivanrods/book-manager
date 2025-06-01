import type { Knex } from "knex";
import path from "path";
const config: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "src", "database", "db.sqlite"),
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, 'src', "database", "migrations"),
    },
  },
};
export default config;
