FROM node:alpine

WORKDIR /app

RUN echo "Building Root package..."
COPY package.json .
RUN yarn

RUN echo "Building Error package..."
COPY packages/error packages/error
RUN cd packages/error && yarn
RUN cd packages/error && yarn build

RUN echo "Building Middleware package..."
COPY packages/middleware packages/middleware
RUN cd packages/middleware && yarn
RUN cd packages/middleware && yarn build

RUN echo "Building Stays services..."
COPY services/auth services/auth
COPY services/auth/package.json services/auth
COPY services/auth/tsconfig.json services/auth
RUN cd services/auth && yarn
RUN cd services/auth && yarn build

WORKDIR /app/services/auth
RUN yarn build
# RUN cd services/auth && yarn build

# FROM node:alpine as production
# WORKDIR /app
# COPY --from=builder ./app/services/auth/package.json ./app/services/auth/package.json
# COPY --from=builder ./app/services/auth/build ./app/services/auth/build
# COPY --from=builder ./app/package.json ./app
# RUN yarn --production
# WORKDIR /app/services/auth
# RUN yarn --production
# RUN cd services/auth && yarn build

# COPY services/auth services/auth

CMD ["yarn", "start"]