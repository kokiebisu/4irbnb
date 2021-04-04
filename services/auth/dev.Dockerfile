FROM node:alpine

WORKDIR /app
COPY lerna.json package.json yarn.lock ./

RUN yarn global add lerna -D -W

WORKDIR /app/packages/error
COPY packages/error/package.json packages/error/tsconfig.json ./
COPY packages/error/src ./src

WORKDIR /app/packages/middleware
COPY packages/middleware/package.json packages/middleware/tsconfig.json ./
COPY packages/middleware/src ./src

WORKDIR /app/services/auth
COPY services/auth/package.json services/auth/tsconfig.json ./
COPY services/auth/src ./src

WORKDIR /app
RUN yarn bootstrap --scope=@nextbnb/auth --include-dependencies

RUN yarn compile:packages
WORKDIR /app/services/auth

CMD ["yarn", "dev"]