FROM node:22-alpine3.20

RUN apk add --no-cache curl && \
	apk add --no-cache nano && \
	apk add --no-cache socat && \
    curl -o- -L https://yarnpkg.com/install.sh | sh

ENV PATH=/root/.yarn/bin:$PATH

WORKDIR /app

COPY . .

RUN chmod +x /app/docker/app/entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/bin/sh", "/app/docker/app/entrypoint.sh"]
