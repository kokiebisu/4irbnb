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

FROM node:alpine as auth
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
WORKDIR /app/services/auth
COPY services/auth/package.json .
COPY services/auth/yarn.lock .
COPY services/auth/tsconfig.json .
COPY services/auth .
RUN yarn
RUN yarn build

FROM node:alpine as production
WORKDIR /app
COPY --from=builder /app .
RUN yarn --production

# # # error
WORKDIR /app/packages/error
COPY --from=auth /app/packages/error/package.json .
COPY --from=auth /app/packages/error/yarn.lock .
COPY --from=auth /app/packages/error/build ./build


# # # middleware
WORKDIR /app/packages/middleware
COPY --from=auth /app/packages/middleware/package.json .
COPY --from=auth /app/packages/middleware/yarn.lock .
COPY --from=auth /app/packages/middleware/build ./build


WORKDIR /app/services/auth
COPY --from=auth /app/services/auth/package.json .
COPY --from=auth /app/services/auth/yarn.lock .
COPY --from=auth /app/services/auth/build ./build
RUN yarn --production

CMD ["yarn", "start"]