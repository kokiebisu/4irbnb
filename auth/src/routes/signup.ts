import express, { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors/bad_request';
import { DatabaseConnectionError } from '../errors/database';
import { User } from '../models/user';

const router = express.Router();

router.post('/api/users/signup', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new BadRequestError('Email in use');
  }

  const user = User.build({ email, password });
  await user.save();
  // throw new DatabaseConnectionError();

  // send jwt, token
  res.status(201).send(user);
});

export { router as signupRouter };
