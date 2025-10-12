# syntax=docker/dockerfile:1
FROM nginx:1.27-alpine

# envsubst + ImageMagick (SVG rasterizácia s librsvg delegátom)
RUN apk add --no-cache gettext imagemagick librsvg

WORKDIR /usr/share/nginx/html

# Web súbory
COPY index.html ./
COPY assets ./assets

# Vygeneruj PNG exporty a favicon.ico zo SVG pomocou ImageMagick
RUN set -eux; \
    convert -background none -density 512 assets/logo-mark.svg -resize 512x512 assets/logo-512.png; \
    convert -background none -density 256 assets/logo-mark.svg -resize 256x256 assets/logo-256.png; \
    convert -background none -density 128 assets/logo-mark.svg -resize 128x128 assets/logo-128.png; \
    convert -background none -density 72  assets/logo-mark.svg -resize 16x16  /tmp/fav-16.png; \
    convert -background none -density 72  assets/logo-mark.svg -resize 32x32  /tmp/fav-32.png; \
    convert -background none -density 72  assets/logo-mark.svg -resize 48x48  /tmp/fav-48.png; \
    convert /tmp/fav-16.png /tmp/fav-32.png /tmp/fav-48.png assets/favicon.ico; \
    rm -f /tmp/fav-*.png

# Entrypoint na generovanie config.js a spustenie nginx
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
