import { requireAuth } from '@doitsimple/shared';
import express, { Request, Response } from 'express';

const router = express.Router();

router.put(
  '/api/users/:id',
  requireAuth,
  async (req: Request, res: Response) => {
    res.status(401).send(`going to develop...`);
  }
);

export { router as UpdateRouter };
