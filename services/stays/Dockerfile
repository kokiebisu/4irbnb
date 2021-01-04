FROM node:alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn

FROM node:alpine as error
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app .
WORKDIR /app/packages/error
COPY packages/error/package.json .
COPY packages/error/yarn.lock .
COPY packages/error .
RUN yarn
RUN yarn build

FROM node:alpine as middleware
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app .
WORKDIR /app/packages/error
COPY --from=error /app/packages/error/package.json .
COPY --from=error /app/packages/error/yarn.lock .
COPY --from=error /app/packages/error/build ./build
WORKDIR /app/packages/middleware
COPY packages/middleware/package.json .
COPY packages/middleware/yarn.lock .
COPY packages/middleware .
RUN yarn
RUN yarn build

FROM node:alpine as stays
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app .
WORKDIR /app/packages/error
COPY --from=error /app/packages/error/package.json .
COPY --from=error /app/packages/error/yarn.lock .
COPY --from=error /app/packages/error/build ./build
WORKDIR /app/packages/middleware
COPY --from=middleware /app/packages/middleware/package.json .
COPY --from=middleware /app/packages/middleware/yarn.lock .
COPY --from=middleware /app/packages/middleware/build ./build
WORKDIR /app/services/stays
COPY services/stays/package.json .
COPY services/stays/yarn.lock .
COPY services/stays/tsconfig.json .
COPY services/stays .
RUN yarn
RUN yarn build

FROM node:alpine as production
WORKDIR /app
COPY --from=builder /app .
RUN yarn --production

# # # error
WORKDIR /app/packages/error
COPY --from=stays /app/packages/error/package.json .
COPY --from=stays /app/packages/error/yarn.lock .
COPY --from=stays /app/packages/error/build ./build


# # # middleware
WORKDIR /app/packages/middleware
COPY --from=stays /app/packages/middleware/package.json .
COPY --from=stays /app/packages/middleware/yarn.lock .
COPY --from=stays /app/packages/middleware/build ./build


WORKDIR /app/services/stays
COPY --from=stays /app/services/stays/package.json .
COPY --from=stays /app/services/stays/yarn.lock .
COPY --from=stays /app/services/stays/build ./build
RUN yarn --production

CMD ["yarn", "start"]