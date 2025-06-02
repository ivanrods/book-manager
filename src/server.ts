import express from "express";
import booksRouter from "./routes/books";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
