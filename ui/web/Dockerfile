FROM node:alpine as builder
ENV NODE_ENV="production"
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
RUN yarn
COPY . .
CMD ["yarn", "dev"]
