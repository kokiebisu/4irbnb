FROM node:12-alpine
WORKDIR /app
COPY package.json .
COPY tsconfig.json .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]