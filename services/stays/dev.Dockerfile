FROM node:alpine

WORKDIR /app
COPY package.json .
RUN yarn --pure-lockfile --non-interactive

WORKDIR /app/packages/middleware
COPY packages/middleware/package.json .
COPY packages.middleware ./
RUN yarn

WORKDIR /app/packages/error
COPY packages/error/package.json .
COPY packages/error .
RUN yarn

WORKDIR /app/services/stays
COPY services/stays/package.json .
COPY services/stays/tsconfig.json .
COPY services/stays .
RUN yarn

CMD ["yarn", "dev"]