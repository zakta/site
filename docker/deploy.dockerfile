FROM node:16.13.2

ARG ssh_prv_key
ARG ssh_pub_key

RUN apt-get update && \
    apt-get install -y \
    git \
    openssh-server

# Authorize SSH Host
RUN mkdir -p /root/.ssh && \
    chmod 0700 /root/.ssh && \
    ssh-keyscan github.com > /root/.ssh/known_hosts

# Add the keys and set permissions
RUN echo "$ssh_prv_key" > /root/.ssh/id_rsa && \
    echo "$ssh_pub_key" > /root/.ssh/id_rsa.pub && \
    chmod 600 /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa.pub

COPY . /var/www
WORKDIR /var/www

RUN yarn install
RUN yarn build

RUN yarn export -o out/
RUN touch out/.nojekyll

RUN git config --local user.name Nelson
RUN git config --local user.email franciscosilvanelson@gmail.com

RUN echo www.zakta.com.br > out/CNAME

RUN git add out/

RUN git commit -m "ci: deploy next.js to gh-pages"

RUN git subtree push --prefix out origin gh-pages
