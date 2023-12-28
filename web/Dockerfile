FROM node:18.16-alpine3.16

ENV HOME=/home

COPY . $HOME/drums_web/

WORKDIR $HOME/drums_web/

RUN npm install

EXPOSE 5050

