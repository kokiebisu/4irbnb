FROM node:alpine

WORKDIR /app
COPY packages/middleware packages/middleware
COPY packages/error packages/error

COPY services/stays/package.json .
COPY services/stays/tsconfig.json .

RUN yarn --production --pure-lockfile --non-interactive

COPY services/stays services/stays

CMD ["yarn", "start:skaffold"]