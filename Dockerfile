FROM node:14

# Set default environment variables
## Make sure to set as the same PORT as env WEB_PORT

ENV PORT=3001

WORKDIR /app

COPY package*.json ./
RUN npm install --verbose

COPY . .

EXPOSE $PORT

CMD ["npm", "start"]