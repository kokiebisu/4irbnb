import express, { Request, Response } from 'express';
import {
  NotAuthorizedError,
  NotFoundError,
  requireAuth,
} from '@doitsimple/shared';
import { Stay } from '../models/stay';

const router = express.Router();

router.put(
  '/api/stays/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    const stay = await Stay.findById(req.params.id);
    if (!stay) {
      throw new NotFoundError();
    }
    if (stay.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }
    res.status(200).send(req.body);
  }
);

export { router as UpdateRouter };
