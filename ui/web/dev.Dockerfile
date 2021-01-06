FROM node:alpine as builder

WORKDIR /app
COPY package.json .
RUN yarn --pure-lockfile --non-interactive

WORKDIR /app/packages/content
COPY packages/content .

WORKDIR /app/ui/web
COPY ui/web/package.json .
COPY ui/web/tsconfig.json .
COPY ui/web .
RUN yarn

CMD ["yarn", "dev"]