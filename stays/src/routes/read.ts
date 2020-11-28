import express, { Request, Response } from 'express';
import { NotFoundError } from '@doitsimple/shared';
import { Stay } from '../models/stay';

const router = express.Router();

router.get('/api/stays', async (req: Request, res: Response) => {
  const stays = await Stay.find({});

  res.status(200).send(stays);
});

router.get('/api/stays/:id', async (req: Request, res: Response) => {
  const stay = await Stay.findById(req.params.id);
  if (!stay) {
    throw new NotFoundError();
  }
  res.status(200).send(stay);
});

export { router as ReadRouter };
