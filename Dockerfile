FROM node   
WORKDIR /src
COPY . .
RUN npm i
EXPOSE 4000
CMD node server.js