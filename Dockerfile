FROM chromedp/headless-shell as chrome
FROM node as build
WORKDIR /work
COPY package.json package-lock.json /work/
RUN npm ci
COPY . /work/
RUN npm run prepare

FROM nginx:alpine
COPY conf.d /etc/nginx/conf.d/
COPY --from=build /work/dist/ /usr/share/nginx/html/
