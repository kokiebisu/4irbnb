FROM node:alpine

WORKDIR /app
COPY packages/middleware packages/middleware
COPY packages/error packages/error

COPY services/auth/package.json services/auth/
COPY services/auth/tsconfig.json services/auth

COPY package.json .

RUN yarn --pure-lockfile --non-interactive

COPY services/auth services/auth

CMD ["yarn", "dev:auth"]