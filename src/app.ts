import express from "express";
import booksRouter from "./routes/books";
import { errorHandle } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.use("/books", booksRouter);

export default app;
