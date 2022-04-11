FROM node:16.14.2 as ci-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ .

FROM ci-stage as build-stage
RUN npm run build

FROM ci-stage as build-storybook
RUN npm run build-storybook

FROM nginx:alpine as production-stage
RUN mkdir /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /app
COPY --from=build-storybook /app/storybook-static /app/storybook

