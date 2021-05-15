import * as express from 'express';
import { json } from 'express';
require('express-async-errors');

// import { errorHandler, NotFoundError, currentUser } from '@doitsimple/shared';
import { NotFoundError } from '@nextbnb/error';
import { errorHandler, currentUser } from '@nextbnb/middleware';
import cookieSession = require('cookie-session');

/** Routes */
import { CreateRouter } from './routes/create';
import { ReadRouter } from './routes/read';
import { UpdateRouter } from './routes/update';

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

app.use(CreateRouter);
app.use(ReadRouter);
app.use(UpdateRouter);

app.all('*', () => {
  () => {
    throw new NotFoundError();
  };
});

app.use(errorHandler);

export default app;
