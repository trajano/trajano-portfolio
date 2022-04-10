# FROM chromedp/headless-shell as chrome
# FROM node:12 as build-stage
# RUN apt-get update \
#  && apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb \
#  && rm -rf /var/lib/apt/lists/*
# FROM cypress/base:12 as build-stage
# FROM cypress/browsers:node12.18.3-chrome89-ff86 as build-stage
FROM node:16.14.2 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ .
RUN npm run build

FROM nginx:alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
