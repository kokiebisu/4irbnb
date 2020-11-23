import express from 'express';

const router = express.Router();

router.get('/api/signout', (req, res) => {
  res.send('signout here');
});

export { router as signoutRouter };
