import { Request, Response, NextFunction } from "express";

interface ErrorStatus extends Error {
  statusCode: number;
}

export const errorHandler = (
  err: ErrorStatus,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  const errStack = err.stack;

  console.error(errStack);
  res.status(errStatus).send({
    success: false,
    status: errStatus,
    message: errMsg,
  });
};
