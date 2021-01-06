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

WORKDIR /app/services/auth
COPY services/auth/package.json .
COPY services/auth/tsconfig.json .
COPY services/auth .
RUN yarn

CMD ["yarn", "dev"]