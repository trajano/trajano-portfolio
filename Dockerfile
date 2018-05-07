FROM nginx:alpine
COPY dist/* /usr/share/nginx/html/
COPY assets/* /usr/share/nginx/html/assets/
COPY conf.d/* /etc/nginx/conf.d/
