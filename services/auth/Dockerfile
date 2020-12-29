FROM node:alpine

WORKDIR /app
COPY packages/middleware packages/middleware
COPY packages/error packages/error

COPY services/auth services/auth

COPY package.json .
COPY yarn.lock .

RUN yarn --production --pure-lockfile --non-interactive

CMD ["yarn", "start"]