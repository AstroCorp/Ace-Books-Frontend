FROM node:24-alpine3.23

RUN apk add --no-cache curl && \
	apk add --no-cache nano && \
	apk add --no-cache socat && \
	npm install --global corepack@latest && \
	corepack enable pnpm

WORKDIR /app

COPY . .

RUN chmod +x /app/docker/app/entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/bin/sh", "/app/docker/app/entrypoint.sh"]
