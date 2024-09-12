FROM node:lts-slim
WORKDIR /application
COPY . /application
RUN npm install
EXPOSE 5000
CMD npm run dev
