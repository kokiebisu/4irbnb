import express, { json } from 'express';
require('express-async-errors');

import { errorHandler, NotFoundError, currentUser } from '@doitsimple/shared';

import cookieSession from 'cookie-session';
import { createStaysRouter } from './routes/create';

const app = express();

// traffic will be proxied by ingress
// make sure express trusts the proxy
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false, // not encrypted
    secure: true, // must be on https connection
  })
);

app.use(currentUser);

app.use(createStaysRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export default app;
