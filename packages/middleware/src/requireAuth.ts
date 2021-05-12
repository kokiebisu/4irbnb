import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '@nextbnb/error';

export const requireAuth = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }
  next();
};
