FROM java:8-alpine
MAINTAINER fernando.mama@nokia.com

COPY src/ /app/src/
RUN mkdir /dist
RUN apk update && apk add bash vim

RUN javac -d /dist /app/src/Main.java

ENTRYPOINT cd /dist && java -cp . Main