FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN yarn

FROM node:alpine as error
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app .
WORKDIR /app/packages/error
COPY packages/error .
RUN yarn
RUN yarn build

FROM node:alpine as middleware
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app .
WORKDIR /app/packages/error
COPY --from=error /app/packages/error/package.json ./package.json
COPY --from=error /app/packages/error/build ./build
WORKDIR /app/packages/middleware
COPY packages/middleware/package.json ./package.json
COPY packages/middleware .
WORKDIR /app/packages/middleware
RUN yarn
RUN yarn build

FROM node:alpine as auth
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app .
WORKDIR /app/packages/error
COPY --from=error /app/packages/error/package.json ./package.json
COPY --from=error /app/packages/error/build ./build
WORKDIR /app/packages/middleware
COPY --from=middleware /app/packages/middleware/package.json ./package.json
COPY --from=middleware  /app/packages/middleware/build ./build
WORKDIR /app/services/auth
COPY services/auth/package.json ./package.json
COPY services/auth/tsconfig.json ./tsconfig.json
COPY services/auth .
RUN yarn
RUN yarn build

FROM node:alpine as production
WORKDIR /app
COPY --from=builder /app .

# error
WORKDIR /app/packages/error
COPY --from=error /app/packages/error/package.json .
COPY --from=error /app/packages/error/build ./build
RUN yarn --production

# middleware
WORKDIR /app/packages/middleware
COPY --from=error /app/packages/error/package.json .
COPY --from=error /app/packages/error/build ./build
COPY --from=middleware /app/packages/middleware/package.json .
COPY --from=middleware /app/packages/error/build ./build
RUN yarn --production

WORKDIR /app/services/auth
COPY --from=auth /app/services/auth/package.json ./package.json
COPY --from=auth /app/services/auth/build ./build
RUN yarn --production



CMD ["yarn", "start"]