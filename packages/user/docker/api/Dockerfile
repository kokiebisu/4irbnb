FROM node:14-alpine as builder

RUN npm install lerna -g
RUN npm install typescript -g

WORKDIR /4irbnb
COPY package.json lerna.json tsconfig.json tsconfig.settings.json yarn.lock ./
RUN yarn

WORKDIR /4irbnb/packages
COPY packages/tsconfig.json .

WORKDIR /4irbnb/packages/common
COPY packages/common/src ./src
COPY packages/common/package.json packages/common/tsconfig.json ./
RUN yarn --production
RUN yarn build

WORKDIR /4irbnb/packages/user
COPY packages/user/src ./src
COPY packages/user/package.json packages/user/tsconfig.json ./
RUN yarn --production
RUN yarn build

FROM amazon/aws-lambda-nodejs:14 as prod

WORKDIR /var/task
COPY --from=builder /4irbnb/packages/user/dist ./dist
COPY --from=builder /4irbnb/packages/user/node_modules ./node_modules

CMD ["dist/api.handler"]
