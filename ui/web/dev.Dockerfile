FROM node:alpine as builder
ENV NODE_ENV="development"
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
RUN yarn
COPY . .
CMD ["yarn", "dev"]
