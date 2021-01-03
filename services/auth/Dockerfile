FROM node:alpine

WORKDIR /app
COPY packages/middleware packages/middleware
COPY packages/error packages/error

COPY services/auth/package.json .
COPY services/auth/tsconfig.json .

RUN yarn --production --pure-lockfile --non-interactive

COPY services/auth services/auth

CMD ["yarn", "start:skaffold"]