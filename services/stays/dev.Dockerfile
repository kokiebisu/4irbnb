FROM node:alpine

WORKDIR /app
COPY packages/middleware packages/middleware
COPY packages/error packages/error

COPY services/stays/package.json services/stays/
COPY services/stays/tsconfig.json services/stays/

COPY package.json .

RUN yarn --pure-lockfile --non-interactive

COPY services/stays services/stays

CMD ["yarn", "dev:stays"]