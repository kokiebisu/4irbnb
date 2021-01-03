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
COPY services/stays services/stays
COPY services/stays/package.json services/stays
COPY services/stays/tsconfig.json services/stays
RUN cd services/stays && yarn
RUN cd services/stays && yarn build


WORKDIR /app/services/stays
RUN yarn build

CMD ["yarn", "start"]