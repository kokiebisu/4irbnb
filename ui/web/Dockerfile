FROM node:alpine as base
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
RUN cat package.json
RUN yarn
COPY . .

FROM base as build
ENV NODE_ENV=production
WORKDIR /app
COPY --from=base /app ./
RUN yarn build
RUN ls

FROM node:alpine as production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./
COPY --from=build /app/public ./public
RUN yarn add next

EXPOSE 3000
CMD ["yarn", "start"]
