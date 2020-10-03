FROM node:alpine as builder
WORKDIR /app
COPY package*.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:alpine
WORKDIR /var/www/localhost/htdocs
COPY --from=builder /build/package*.json ./
COPY --from=builder /build/.next ./.next
COPY --from=builder /build/public ./public

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
WORKDIR /var/www/localhost/htdocs