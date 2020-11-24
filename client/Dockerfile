FROM node:alpine as builder
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
RUN yarn
COPY . .
CMD ["yarn", "dev"]
