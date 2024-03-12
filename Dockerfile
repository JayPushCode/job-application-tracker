FROM node:14

# Set default environment variables
ENV PORT=3001

RUN apt-get update && apt-get install -y git
WORKDIR /app

RUN git clone -b docker-dev https://github.com/JayPushCode/job-application-tracker.git /app

COPY start.sh /app/start.sh
COPY .env /app/.env

RUN npm install

ARG PORT
EXPOSE ${PORT}

ENTRYPOINT ["./start.sh"]