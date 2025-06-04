import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandle(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: "Erro de validação",
      details: err.errors,
    });
  }
  return res.status(500).json({
    error: "Erro interno no servidor",
    message: err.message || "Algo deu errado",
  });
}
