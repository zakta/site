FROM node:16.13.2

COPY . /var/www
WORKDIR /var/www

RUN yarn install
ENTRYPOINT yarn dev

EXPOSE 3000
