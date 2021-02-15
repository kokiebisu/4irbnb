FROM node:alpine as base

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
RUN yarn compile:services

FROM node:alpine as production

WORKDIR /app

COPY --from=base /app/lerna.json /app/package.json /app/yarn.lock ./
COPY --from=base /app/node_modules ./node_modules

WORKDIR /app/packages/error
COPY --from=base /app/packages/error/build ./build
COPY --from=base /app/packages/error/package.json .

WORKDIR /app/packages/middleware
COPY --from=base /app/packages/middleware/build ./build
COPY --from=base /app/packages/middleware/package.json .

WORKDIR /app/services/stays
COPY --from=base /app/services/stays/package.json .
COPY --from=base /app/services/stays/build ./build
COPY --from=base /app/services/stays/node_modules ./node_modules

CMD ["node", "build/index.js"]