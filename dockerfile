FROM node:14

WORKDIR /shift_management

COPY package*.json ./

RUN npm install

COPY . .

COPY .env ./

RUN npm run build


EXPOSE 8000

CMD [ "node" ,"dist/app.js"]

