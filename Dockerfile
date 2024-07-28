FROM node:16.14.2 AS ci-stage
WORKDIR /app
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci
COPY ./src/  ./src/
COPY ./public/  ./public/
COPY ./.storybook/  ./.storybook/
COPY *.js *.json ./
RUN ls ./

FROM ci-stage AS build-stage
RUN npm run build

FROM ci-stage AS build-storybook
RUN npm run build-storybook

# FROM caddy:builder AS builder
# RUN git clone https://github.com/trajano/caddy /mnt/
# RUN xcaddy build \
#     --replace github.com/caddyserver/caddy/v2/modules/caddyhttp/tracing=/mnt/modules/caddyhttp/tracing

# FROM busybox:1.36.1-uclibc AS caddy
FROM caddy:alpine
COPY --from=builder /usr/bin/caddy /usr/bin/caddy
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build-stage /app/dist/ /usr/share/caddy/
COPY --from=build-storybook /app/storybook-static/ /usr/share/caddy/storybook/
HEALTHCHECK CMD /usr/bin/wget -q http://localhost/ -O /dev/null --spider || exit 1
