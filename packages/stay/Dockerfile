FROM amazon/aws-lambda-nodejs:14 as builder

WORKDIR /nextbnb
RUN npm install lerna -g

COPY package.json lerna.json tsconfig.json tsconfig.settings.json ./
# RUN npm install

WORKDIR /nextbnb/packages
COPY tsconfig.json .

# COMMON
WORKDIR /nextbnb/packages/common
COPY packages/common/package.json packages/common/tsconfig.json ./
COPY packages/common/src ./src
RUN npm install
RUN npm run build

### DATABASE
WORKDIR /nextbnb/packages/database
COPY packages/database/package.json packages/database/tsconfig.json ./
COPY packages/database/src ./src
RUN npm install
RUN npm run build

### STAY
WORKDIR /nextbnb/packages/stay
COPY packages/stay/package.json packages/stay/tsconfig.json ./
COPY packages/stay/src ./src
RUN npm install typescript -g
ENV NODE_ENV=production
RUN npm install
RUN npm run build

FROM amazon/aws-lambda-nodejs:14 as prod
WORKDIR /var/task
RUN mkdir -p node_modules/@nextbnb
COPY --from=builder /nextbnb/packages/stay/node_modules/@nextbnb/common ./node_modules/@nextbnb/common
COPY --from=builder /nextbnb/packages/stay/node_modules/@nextbnb/database ./node_modules/@nextbnb/database
COPY --from=builder /nextbnb/packages/stay/package.json .
COPY --from=builder /nextbnb/packages/stay/dist ./dist

CMD ["dist/index.handler"]
