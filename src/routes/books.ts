import { Router, Request, Response } from "express";

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
router.post("/", CreateBook);
router.patch("/:id", UpdateBookById);
router.delete("/:id", DeleteBookById);

export default router;
