FROM node:lts as dependencies
WORKDIR /usr/app/mockServer
COPY package.json ./
RUN npm install
COPY ./

# Building app
RUN npm run build
EXPOSE 5000

# Running the app
CMD ["nodemon"]