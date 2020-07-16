FROM node:alpine as builder
WORKDIR /app
COPY package*.json .
RUN yarn
COPY . .
RUN yarn build --prod

FROM nginx:alpine
WORKDIR /var/www/localhost/htdocs
COPY --from=builder /app/build ./build

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
WORKDIR /var/www/localhost/htdocs