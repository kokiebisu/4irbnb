FROM node:alpine

WORKDIR /app
COPY package.json .
RUN yarn --pure-lockfile --non-interactive

WORKDIR /app/packages/middleware
COPY packages/middleware .

WORKDIR /app/packages/error
COPY packages/error .

WORKDIR /app/services/auth
COPY services/auth/package.json .
COPY services/auth/tsconfig.json .
COPY services/auth .

CMD ["yarn", "dev"]