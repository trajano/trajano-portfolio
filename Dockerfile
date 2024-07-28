FROM node:16.14.2 AS ci-stage
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci
COPY ./src/  ./src/
COPY ./.storybook/  ./.storybook/
COPY *.js *.json ./
RUN ls ./

FROM ci-stage AS build-stage
RUN npm run build

FROM ci-stage AS build-storybook
RUN npm run build-storybook

FROM caddy:alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build-stage /app/dist/ /usr/share/caddy/
COPY --from=build-storybook /app/storybook-static/ /usr/share/caddy/storybook/
