import { Router } from "express";
import { validateBook } from "../middlewares/validateBook";

import {
  GetAllBooks,
  GetBookById,
  CreateBook,
  UpdateBookById,
  DeleteBookById,
} from "../controllers";
const router = Router();

router.get("/", GetAllBooks);
router.get("/:id", GetBookById);
router.post("/", validateBook, CreateBook);
router.patch("/:id", validateBook, UpdateBookById);
router.delete("/:id", DeleteBookById);

export default router;
