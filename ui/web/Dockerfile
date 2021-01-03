FROM node:alpine as builder
ENV NODE_ENV="production"
WORKDIR /app

COPY ui/web/package.json ui/web/
COPY ui/web/tsconfig.json ui/web/

COPY package.json ./

RUN yarn

COPY ui/web ui/web

CMD ["yarn", "dev:web"]
