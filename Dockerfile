FROM node:lts-alpine3.20
WORKDIR /application
COPY . /application
RUN npm install
EXPOSE 4000
CMD npm run dev
