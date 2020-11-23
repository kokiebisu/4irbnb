import express from 'express';

const router = express.Router();

router.get('/api/signup', (req, res) => {
  res.send('signup here');
});

export { router as signupRouter };
