FROM node:4.5-slim
MAINTAINER Mark Ronald Delos Santos(markrdelossantos@hotmail.com)

# OFFICE
# RUN npm config set proxy http://10.138.15.10:8080
# RUN npm config set https_proxy http://10.138.15.10:8080
# RUN npm config set proxy http://10.144.1.10:8080
# RUN npm config set https_proxy http://10.144.1.10:8080
RUN npm update -g

RUN echo "cd /app; npm install; npm start" > /usr/local/bin/npm_install_at_start.sh
ENTRYPOINT bin/bash /usr/local/bin/npm_install_at_start.sh