FROM node:14

# Set default environment variables
ENV PORT=3001

# Install Git
RUN apt-get update && apt-get install -y git

# Set the working directory
WORKDIR /app

# Clone the repository into the Docker image
RUN git clone -b docker-dev https://github.com/JayPushCode/job-application-tracker.git .

# Install dependencies
RUN npm install

# Expose the port
EXPOSE ${PORT}

# Command to run the application
CMD ["npm", "start"]
