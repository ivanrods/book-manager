import { Router } from "express";
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
router.post("/", CreateAuthor);
router.patch("/:id", UpdateAuthorById);
router.delete("/:id", DeleteAuthorById);

export default router;
