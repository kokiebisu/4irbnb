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

WORKDIR /app/services/stays
COPY services/stays/package.json services/stays/tsconfig.json ./
COPY services/stays/src ./src

WORKDIR /app
RUN yarn bootstrap --scope=@nextbnb/stays --include-dependencies

RUN yarn compile:packages
WORKDIR /app/services/stays

CMD ["yarn", "dev"]