FROM node:6.11.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install && npm rebuild
COPY . /usr/src/app
EXPOSE 7214
ENV NODE_ENV beta
CMD [ "npm", "start" ]
