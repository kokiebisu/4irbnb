FROM node:alpine

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
RUN yarn bootstrap --scope=@airbnb/web 
RUN yarn compile:packages
RUN yarn compile:web

EXPOSE 3000

CMD ["yarn", "dev"]