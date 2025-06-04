import { Request, Response, NextFunction } from "express";
import { bookSchema } from "../schemas/bookSchema";

export function validateBook(req: Request, _res: Response, next: NextFunction) {
  try {
    bookSchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
}
