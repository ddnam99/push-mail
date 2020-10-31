FROM node:12.18.3-alpine

EXPOSE 4000
WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package.json .
RUN npm install --production --silent
COPY . .
RUN npm run build

CMD npm run server