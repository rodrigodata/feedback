FROM node:8.16.0-alpine

COPY . /app

WORKDIR /app

RUN npm install

RUN sequelize db:migrate

EXPOSE 3000

CMD npm start
