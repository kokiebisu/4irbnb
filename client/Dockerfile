FROM node:alpine as builder
WORKDIR /app
COPY package*.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:alpine
WORKDIR /var/www/localhost/htdocs
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
WORKDIR /var/www/localhost/htdocs