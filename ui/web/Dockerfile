FROM node:alpine as base

WORKDIR /app
COPY lerna.json package.json yarn.lock ./
RUN yarn global add lerna -D -W

WORKDIR /app/packages/content
COPY packages/content/package.json packages/content/tsconfig.json ./
COPY packages/content/src ./src

WORKDIR /app/ui/web
COPY ui/web/package.json .
COPY ui/web/tsconfig.json .
COPY ui/web .

WORKDIR /app
RUN yarn bootstrap --scope=@nextbnb/web 
RUN yarn compile:packages
RUN yarn compile:web

FROM node:alpine as production
WORKDIR /app
COPY --from=base /app/lerna.json /app/package.json /app/yarn.lock ./
COPY --from=base /app/node_modules ./node_modules

WORKDIR /app/packages/content
COPY --from=base /app/packages/content/package.json .
COPY --from=base /app/packages/content/build ./build

WORKDIR /app/ui/web
COPY --from=base /app/ui/web/package.json .
COPY --from=base /app/ui/web/.next ./.next
COPY --from=base /app/ui/web/public ./public

EXPOSE 3000
CMD ["yarn", "start"]
