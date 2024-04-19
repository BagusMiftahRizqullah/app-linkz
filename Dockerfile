#!/bin/bash 
FROM node:18.16 as staging
ENV NODE_ENV=development
WORKDIR /linkz-app
COPY . /linkz-app/
RUN yarn
RUN yarn build


FROM nginx:latest
WORKDIR /linkz-app  
COPY --from=staging /linkz-app/ /linkz-app
COPY --from=staging /linkz-app/nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]