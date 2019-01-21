FROM nginx:1.15.7-alpine
COPY ./dist/toto-shop /usr/share/nginx/html
COPY ./ui.conf /etc/nginx/conf.d/default.conf