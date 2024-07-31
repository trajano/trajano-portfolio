FROM node:16.14.2 AS ci-stage
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci
COPY ./src/  ./src/
COPY ./public/  ./public/
COPY ./.storybook/  ./.storybook/
COPY *.js *.json ./

FROM ci-stage AS build-stage
RUN npm run build

FROM ci-stage AS build-storybook
RUN npm run build-storybook

FROM caddy:builder AS builder
RUN --mount=type=cache,target=/go/pkg/mod/cache xcaddy build \
  --with github.com/caddyserver/caddy/v2=github.com/trajano/caddy/v2@otel-client
#  --with github.com/caddyserver/caddy/v2=github.com/trajano/caddy/v2@1f6b8322bd1828de43db038483f79196d8a094f4

FROM caddy:alpine
# FROM busybox:1.36.1-uclibc AS caddy
COPY --from=builder /usr/bin/caddy /usr/bin/caddy
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build-stage /app/dist/ /usr/share/caddy/
COPY --from=build-storybook /app/storybook-static/ /usr/share/caddy/storybook/
HEALTHCHECK CMD /usr/bin/wget -q http://localhost/ -O /dev/null --spider || exit 1
