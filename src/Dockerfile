# syntax=docker/dockerfile:1
FROM nginx:1.27-alpine

# envsubst + rasterizačné nástroje pre generovanie assetov
RUN apk add --no-cache gettext librsvg imagemagick

WORKDIR /usr/share/nginx/html

# Web súbory
COPY index.html ./
COPY assets ./assets

# Vygeneruj PNG exporty a favicon.ico z SVG
RUN set -eux; \
    rsvg-convert -w 512 -h 512 assets/logo-mark.svg > assets/logo-512.png; \
    rsvg-convert -w 256 -h 256 assets/logo-mark.svg > assets/logo-256.png; \
    rsvg-convert -w 128 -h 128 assets/logo-mark.svg > assets/logo-128.png; \
    rsvg-convert -w 16 -h 16 assets/logo-mark.svg > /tmp/fav-16.png; \
    rsvg-convert -w 32 -h 32 assets/logo-mark.svg > /tmp/fav-32.png; \
    rsvg-convert -w 48 -h 48 assets/logo-mark.svg > /tmp/fav-48.png; \
    convert /tmp/fav-16.png /tmp/fav-32.png /tmp/fav-48.png assets/favicon.ico; \
    rm -f /tmp/fav-*.png

# Entrypoint na generovanie config.js a spustenie nginx
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
