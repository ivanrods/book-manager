import { Router } from "express";
import { validateBook } from "../middlewares/validateBook";

import {
  getAllBooks,
  getBookById,
  CreateBook,
  UpdateBookById,
  DeleteBookById,
} from "../controllers/bookController";
const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", validateBook, CreateBook);
router.patch("/:id", validateBook, UpdateBookById);
router.delete("/:id", DeleteBookById);

export default router;
