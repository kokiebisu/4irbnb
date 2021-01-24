FROM node:alpine as builder

WORKDIR /app
COPY package.json .


WORKDIR /app/packages/error
COPY packages/error/package.json  .
COPY packages/error/tsconfig.json .
COPY packages/error ./


WORKDIR /app/packages/middleware
COPY packages/middleware/package.json .
COPY packages/middleware/tsconfig.json .
COPY packages/middleware ./

WORKDIR /app/services/auth
COPY services/auth/package.json .
COPY services/auth/tsconfig.json .
COPY services/auth ./
RUN yarn 
# RUN yarn build

CMD ["node", "build/index.js"]