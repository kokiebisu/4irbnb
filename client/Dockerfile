FROM node:12

WORKDIR /client

COPY package*.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]