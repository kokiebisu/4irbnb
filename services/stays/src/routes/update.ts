import * as express from 'express';
import { Request, Response } from 'express';
import { NotAuthorizedError, NotFoundError } from '@nextbnb/error';
import { requireAuth } from '@nextbnb/middleware';
import { Stay } from '../models/stay';

const router = express.Router();

async function updateStay(req: Request, res: Response): Promise<void> {
  const stay = await Stay.findById(req.params.id);
  if (!stay) {
    throw new NotFoundError();
  }
  if (req.currentUser && stay.userId !== req.currentUser.id) {
    throw new NotAuthorizedError();
  }
  res.status(200).send(req.body);
}

router.put('/api/stays/:id', requireAuth, (req: Request, res: Response) => {
  updateStay(req, res).catch((err: unknown) => {
    res.status(400).json({
      message: err,
    });
  });
});

export { router as UpdateRouter };
