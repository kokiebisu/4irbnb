import * as express from 'express';
import { Request, Response } from 'express';
import { BadRequestError } from '@nextbnb/error';
import { User } from '../models/user';
import * as jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/api/users/signup', (req: Request, res: Response) => {
  async () => {
    try {
      if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY not found');
      }

      const { email, password } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        throw new BadRequestError('Email in use');
      }

      const user = User.build({ email, password });
      await user.save();
      // throw new DatabaseConnectionError();

      const userJwt = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_KEY
      );

      req.session = {
        jwt: userJwt,
      };

      // send jwt, token
      res.status(201).send(user);
    } catch (err) {
      res.status(400).json({
        message: err,
      });
    }
  };
});

export { router as signupRouter };
