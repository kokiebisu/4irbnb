FROM node:alpine

WORKDIR /app
COPY yarn.lock .
COPY package.json .
COPY lerna.json .
RUN yarn

WORKDIR /app/packages/error
COPY packages/error/package.json .
COPY packages/error/tsconfig.json .
COPY packages/error/src ./src

WORKDIR /app/packages/middleware
COPY packages/middleware/package.json .
COPY packages/middleware/tsconfig.json .
COPY packages/middleware/src ./src

WORKDIR /app/services/stays
COPY services/stays/package.json .
COPY services/stays/tsconfig.json .
COPY services/stays/src ./src

WORKDIR /app
RUN yarn bootstrap
RUN yarn build:packages
RUN yarn build:services

WORKDIR /app/services/stays
CMD ["node", "build/index.js"]