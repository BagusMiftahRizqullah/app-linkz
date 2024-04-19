#!/bin/bash 
FROM node:18.16 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]


FROM nginx:latest
WORKDIR /app  
COPY --from=staging /app/ /app
COPY --from=staging /app/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]