FROM node:alpine as builder

WORKDIR /app
COPY package.json .
RUN yarn

WORKDIR /app/packages/content
COPY packages/content/package.json .
COPY packages/content ./
RUN yarn
RUN yarn build

WORKDIR /app/ui/web
COPY ui/web/package.json .
COPY ui/web/tsconfig.json .
COPY ui/web .
RUN yarn
RUN yarn build

FROM node:alpine as production
WORKDIR /app
COPY package.json .
RUN yarn --production

WORKDIR /app/packages/content
COPY --from=builder /app/packages/content/package.json .
COPY --from=builder /app/packages/content/build ./build
RUN yarn --production

WORKDIR /app/ui/web
COPY --from=builder /app/ui/web/package.json .
COPY --from=builder /app/ui/web/.next ./.next
COPY --from=builder /app/ui/web/public ./public
RUN yarn --production

EXPOSE 3000
CMD ["yarn", "start"]
