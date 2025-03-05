FROM node:20-alpine3.18

RUN apk add --no-cache curl && \
	apk add --no-cache nano && \
    curl -o- -L https://yarnpkg.com/install.sh | sh

ENV PATH /root/.yarn/bin:$PATH

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 3000

ENV CHOKIDAR_USEPOLLING=true

CMD ["yarn", "dev", "--host", "0.0.0.0"]
