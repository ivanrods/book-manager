import { Request, Response, NextFunction } from "express";
import { authorSchema } from "../schemas/authorSchema";

export function validateAuthor(req: Request, _res: Response, next: NextFunction) {
  try {
    authorSchema.parse(req.body);
    next();
  } catch (error) {
   
    next(error);
  }
}
