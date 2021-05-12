import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

interface IUserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      session?: any;
      currentUser?: IUserPayload;
    }
  }
}

export const currentUser = (req: Request, _: Response, next: NextFunction) => {
  if (!process.env.JWT_KEY) {
    throw new Error("Doesn't include JWT_key");
  }
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY
    ) as IUserPayload;
    req.currentUser = payload;
  } catch (err) {
    console.error(err);
  }

  next();
};
