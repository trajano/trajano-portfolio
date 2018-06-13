FROM nginx:alpine
COPY dist /usr/share/nginx/html/
COPY conf.d /etc/nginx/conf.d/
