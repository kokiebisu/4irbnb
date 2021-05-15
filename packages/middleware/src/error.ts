import { Request, Response, NextFunction } from 'express';
import { CustomError } from '@nextbnb/error';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response<any, Record<string, any>> | undefined => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }
  return res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
};
