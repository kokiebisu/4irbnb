import express, { Request, Response } from 'express';
import { requireAuth } from '@doitsimple/shared';

const router = express.Router();

router.post('/api/stays', requireAuth, async (req: Request, res: Response) => {
  res.sendStatus(200);
});

export { router as createStaysRouter };
