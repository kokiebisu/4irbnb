import express, { json, NextFunction } from 'express';
import { currentUserRouter } from './routes/current_user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error';
import { NotFoundError } from './errors/not_found';

const app = express();

app.use(json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res, next: NextFunction) => {
  next(new NotFoundError());
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
