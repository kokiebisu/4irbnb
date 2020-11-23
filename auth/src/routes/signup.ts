import express, { Request, Response, NextFunction } from 'express';
import { DatabaseConnectionError } from '../errors/database';

const router = express.Router();

router.post(
  '/api/users/signup',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      console.log('Creating a user...');
      throw new Error();
      res.send({});
    } catch (err) {
      next(new DatabaseConnectionError());
    }
  }
);

export { router as signupRouter };
