import express from 'express';

const router = express.Router();

router.get('/api/users/signin', (req, res) => {
  res.send('signin here');
});

export { router as signinRouter };
