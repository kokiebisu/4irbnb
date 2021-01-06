FROM node:alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn

WORKDIR /app/packages/error
COPY packages/error/package.json .
COPY packages/error .
RUN yarn
RUN yarn build

WORKDIR /app/packages/middleware
COPY packages/middleware/package.json .
COPY packages/middleware .
RUN yarn
RUN yarn build

WORKDIR /app/services/auth
COPY services/auth/package.json .
COPY services/auth .
RUN yarn
RUN yarn build

FROM node:alpine as production
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn

WORKDIR /app/packages/error
COPY --from=builder /app/packages/error/package.json .
COPY --from=builder /app/packages/error/build ./build
RUN yarn --production

WORKDIR /app/packages/middleware
COPY --from=builder /app/packages/middleware/package.json .
COPY --from=builder /app/packages/middleware/build ./build
RUN yarn --production

WORKDIR /app/services/auth
COPY --from=builder /app/services/auth/package.json .
COPY --from=builder /app/services/auth/build ./build
RUN yarn --production

CMD ["yarn", "start"]