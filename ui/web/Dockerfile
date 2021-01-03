FROM node:alpine as builder
ENV NODE_ENV="production"
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
RUN cat package.json
RUN yarn
COPY . .
RUN yarn build
CMD ["yarn", "start"]
