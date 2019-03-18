FROM digitalcanvasdesign/hugo-nodejs-builder as builder
WORKDIR /app
COPY .git /app/.git
COPY .gitmodules /app/.gitmodules
RUN apk update \
    && apk upgrade \
    && apk add --no-cache bash git openssh \
    && git submodule update --init --recursive \
    && cd /app/themes/developer-theme && npm install
COPY ./content/ /app/content/
COPY ./static/ /app/static/
COPY ./config.toml /app/config.toml
RUN cd /app && hugo --destination /dist --cleanDestinationDir --minify

FROM nginx:alpine
COPY ./nginx /etc/nginx/
COPY --chown=nginx:nginx --from=builder /dist/ /app/
