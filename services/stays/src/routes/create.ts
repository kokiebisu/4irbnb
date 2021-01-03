import express, { Request, Response } from "express";
// import { requireAuth } from '@doitsimple/shared';
import { requireAuth } from "@airbnb/middleware";
import { Stay } from "../models/stay";

const router = express.Router();

router.post("/api/stays", requireAuth, async (req: Request, res: Response) => {
  const { title, price } = req.body;
  const stay = Stay.build({ title, price, userId: req.currentUser!.id });
  await stay.save();
  res.status(201).send(stay);
});

export { router as CreateRouter };
