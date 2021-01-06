FROM node:alpine as builder

WORKDIR /app
COPY package.json .
RUN yarn

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

WORKDIR /app/ui/web
COPY --from=builder /app/ui/web/package.json .
COPY --from=builder /app/ui/web/.next ./.next
COPY --from=builder /app/ui/web/public ./
RUN yarn --production

EXPOSE 3000
CMD ["yarn", "start"]
