import * as express from 'express';
import { Request, Response } from 'express';
// import { BadRequestError } from "@doitsimple/shared";
import { BadRequestError } from '@nextbnb/error';
import { User } from '../models/user';
import { Password } from '../services/password';
import * as jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/api/users/signin', (req: Request, res: Response) => {
  async () => {
    try {
      if (process.env.JWT_KEY) {
        throw new Error('JWT_KEY not found');
      }
      const { email, password } = req.body;
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        throw new BadRequestError('Invalid credentials');
      }

      const passwordMatch = await Password.compare(
        existingUser.password,
        password
      );

      if (!passwordMatch) {
        throw new BadRequestError("Password didn't match");
      }

      const userJwt = jwt.sign(
        { id: existingUser.id, email: existingUser.email },
        process.env.JWT_KEY
      );
      req.session = {
        jwt: userJwt,
      };

      res.status(200).send(existingUser);
    } catch (err) {
      res.status(400).json({
        message: err,
      });
    }
  };
});

export { router as signinRouter };
