FROM node:alpine

WORKDIR /app
COPY package.json .
RUN yarn --pure-lockfile --non-interactive

WORKDIR /app/packages/middleware
COPY packages/middleware .

WORKDIR /app/packages/error
COPY packages/error .

WORKDIR /app/services/stays
COPY services/stays/package.json .
COPY services/stays/tsconfig.json .
COPY services/stays .

CMD ["yarn", "dev"]