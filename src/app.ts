import express from "express";
import booksRouter from "./routes/bookRoutes";
import authorRouter from './routes/authorRoutes'

const app = express();

app.use(express.json());

app.use("/books", booksRouter);
app.use("/authors", authorRouter);

export default app;
