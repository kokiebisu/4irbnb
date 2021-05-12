import * as express from 'express';
import { Request, Response } from 'express';
import { NotFoundError } from '@nextbnb/error';
import { Stay } from '../models/stay';

const router = express.Router();

async function getStays(req: Request, res: Response) {
  const stays = await Stay.find({});
  res.status(200).send(stays);
  getStays(req, res).catch((err: unknown) => {
    res.status(400).json({
      message: err,
    });
  });
}

router.get('/api/stays', (req: Request, res: Response) => {
  getStays(req, res).catch((err: unknown) => {
    res.status(400).json({
      message: err,
    });
  });
});

async function getStaysById(req: Request, res: Response): Promise<void> {
  const stay = await Stay.findById(req.params.id);
  if (!stay) {
    throw new NotFoundError();
  }
  res.status(200).send(stay);
}

router.get('/api/stays/:id', (req: Request, res: Response) => {
  getStaysById(req, res).catch((err: unknown) => {
    res.status(400).json({
      message: err,
    });
  });
});

export { router as ReadRouter };
