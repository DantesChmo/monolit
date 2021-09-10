FROM node:16-alpine

RUN apk add make
RUN apk add bash

WORKDIR /usr/local/app

COPY ../dev ./dev
COPY ../db ./db
COPY ../src ./src
COPY ../tests ./tests
COPY ../.sequelizerc ../jest.config.json ../Makefile ../package.json ../tsconfig.json ../yarn.lock ./

RUN make bootstrap-deps
