FROM node:14-alpine as builder

RUN npm install lerna -g
RUN npm install typescript -g

WORKDIR /nextbnb
COPY package.json lerna.json tsconfig.json tsconfig.settings.json yarn.lock ./
RUN yarn

WORKDIR /nextbnb/packages
COPY packages/tsconfig.json .

WORKDIR /nextbnb/packages/common
COPY packages/common/package.json packages/common/tsconfig.json ./
RUN yarn --production
COPY packages/common/src ./src
RUN yarn build

WORKDIR /nextbnb/packages/auth
COPY packages/auth/package.json packages/auth/tsconfig.json ./
RUN yarn --production
COPY packages/auth/src ./src
RUN yarn build

FROM amazon/aws-lambda-nodejs:14 as prod

WORKDIR /var/task
COPY --from=builder /nextbnb/packages/auth/dist ./dist
COPY --from=builder /nextbnb/packages/auth/node_modules ./node_modules

CMD ["dist/app.handler"]


