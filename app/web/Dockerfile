FROM node:alpine as base

WORKDIR /app
COPY lerna.json package.json yarn.lock ./
RUN yarn global add lerna -D -W

WORKDIR /app/packages/web
COPY packages/web/package.json .
COPY packages/web/tsconfig.json .
COPY packages/web .

WORKDIR /app
RUN yarn bootstrap --scope=@nextbnb/web 
RUN yarn compile:web

FROM node:alpine as production
WORKDIR /app
COPY --from=base /app/lerna.json /app/package.json /app/yarn.lock ./
COPY --from=base /app/node_modules ./node_modules

WORKDIR /app/packages/web
COPY --from=base /app/packages/web/package.json .
COPY --from=base /app/packages/web/.next ./.next
COPY --from=base /app/packages/web/public ./public

EXPOSE 3000
CMD ["yarn", "start"]
