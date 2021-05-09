FROM node:alpine

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

EXPOSE 3000

CMD ["yarn", "dev"]