FROM nginx:latest

COPY scripts/nginx.conf /etc/nginx/conf.d/default.conf
COPY public /usr/share/nginx/public