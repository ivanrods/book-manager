import { Router } from "express";
import { validateAuthor } from "../middlewares/validateAuthor";
import {
  CreateAuthor,
  DeleteAuthorById,
  GetAllAuthors,
  GetAuthorById,
  UpdateAuthorById,
} from "../controllers";
const router = Router();

router.get("/", GetAllAuthors);
router.get("/:id", GetAuthorById);
router.post("/", validateAuthor, CreateAuthor);
router.patch("/:id", validateAuthor, UpdateAuthorById);
router.delete("/:id", DeleteAuthorById);

export default router;
