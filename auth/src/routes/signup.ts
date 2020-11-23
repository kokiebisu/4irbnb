import express from 'express';
import { DatabaseConnectionError } from '../errors/database';

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
  const { email, password } = req.body;

  console.log('Creating a user...');
  throw new DatabaseConnectionError();

  res.send({});
});

export { router as signupRouter };
