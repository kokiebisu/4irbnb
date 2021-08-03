FROM node:14-alpine as builder

RUN npm install lerna -g
RUN npm install typescript -g

WORKDIR /nextbnb
COPY package.json lerna.json tsconfig.json tsconfig.settings.json yarn.lock ./
RUN yarn

WORKDIR /nextbnb/packages
COPY packages/tsconfig.json .

WORKDIR /nextbnb/packages/common
COPY packages/common/src ./src
COPY packages/common/package.json packages/common/tsconfig.json ./
RUN yarn --production
RUN yarn build

WORKDIR /nextbnb/packages/stay
COPY packages/stay/src ./src
COPY packages/stay/package.json packages/stay/tsconfig.json ./
RUN yarn --production
RUN yarn build

FROM amazon/aws-lambda-nodejs:14 as prod

WORKDIR /var/task
COPY --from=builder /nextbnb/packages/stay/dist ./dist
COPY --from=builder /nextbnb/packages/stay/node_modules ./node_modules

CMD ["dist/app.handler"]
