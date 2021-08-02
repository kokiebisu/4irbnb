FROM node:14-alpine as builder

WORKDIR /nextbnb
RUN npm install lerna -g

COPY package.json lerna.json tsconfig.json tsconfig.settings.json yarn.lock ./
RUN yarn
RUN yarn cache clean

WORKDIR /nextbnb/packages
COPY packages/tsconfig.json .

WORKDIR /nextbnb/packages/common
COPY packages/common ./

WORKDIR /nextbnb/packages/database
COPY packages/database ./

WORKDIR /nextbnb/packages/stay
COPY packages/stay ./

RUN yarn --pure-lockfile --non-interactive

WORKDIR /nextbnb/packages/common
RUN yarn build
RUN yarn cache clean

WORKDIR /nextbnb/packages/database
RUN yarn build
RUN yarn cache clean

WORKDIR /nextbnb/packages/stay
RUN yarn build
RUN yarn cache clean

FROM node:14-alpine as extract
WORKDIR /nextbnb

COPY package.json yarn.lock ./

WORKDIR /nextbnb/packages/common
COPY --from=builder /nextbnb/packages/common/package.json ./
COPY --from=builder /nextbnb/packages/common/dist ./dist

WORKDIR /nextbnb/packages/database
COPY --from=builder /nextbnb/packages/database/package.json ./
COPY --from=builder /nextbnb/packages/database/dist ./dist

WORKDIR /nextbnb/packages/stay
COPY --from=builder /nextbnb/packages/stay/package.json ./
COPY --from=builder /nextbnb/packages/stay/dist ./dist

WORKDIR /nextbnb

RUN yarn install --pure-lockfile --non-interactive --production

FROM amazon/aws-lambda-nodejs:14 as prod

WORKDIR /var/task

COPY --from=extract /nextbnb/packages/stay/package.json .
COPY --from=extract /nextbnb/packages/stay/dist ./dist
COPY --from=extract /nextbnb/node_modules/ ./node_modules
COPY --from=extract /nextbnb/node_modules/@nextbnb/common ./node_modules/@nextbnb/common
COPY --from=extract /nextbnb/node_modules/@nextbnb/database ./node_modules/@nextbnb/database


CMD ["dist/app.handler"]
