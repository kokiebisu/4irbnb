FROM node:alpine

WORKDIR /app

COPY package.json tsconfig.json tsconfig.settings.json ./

COPY ./packages/tsconfig.json ./packages/

RUN npm install

WORKDIR /app/packages/common
COPY ./packages/common/package.json ./packages/common/tsconfig.json ./
RUN npm install
COPY ./packages/common/src ./src
RUN npm run build

### util
WORKDIR /app/packages/utils
COPY ./packages/utils/package.json ./packages/utils/tsconfig.json ./
RUN npm install
COPY ./packages/utils/src ./src
RUN npm run build

### base
WORKDIR /app/packages/base
COPY ./packages/base/package.json ./packages/base/tsconfig.json ./
RUN npm install
COPY ./packages/base/src ./src
RUN npm run build

### auth
WORKDIR /app/packages/auth
COPY ./packages/auth/package.json ./packages/auth/tsconfig.json ./
RUN npm install
COPY ./packages/auth/src ./src
RUN npm run build


EXPOSE 4000

CMD npm start
