import express, { Request, Response } from "express";

import { currentUser } from "@airbnb/middleware";
const router = express.Router();

router.get(
  "/api/users/currentuser",
  currentUser,
  // requireAuth,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };
