# Welcome to AppliTrak! Docker Simplified Setup

![applitrak](https://user-images.githubusercontent.com/79222168/144671355-1c204c82-b9eb-44dd-b979-956546a1c45b.png)

## About

Be sure to download this repository if you'd like to run AppliTrak from a Docker Container that only allows a docker-compose.yml file for stack dockerization. This application uses Docker Compose to create two containers, one for a MySQL Database and another to run the actual application. The purpose of me creating this was to create a simplified way to self-host applications to be accessible.

## Instructions

1. **Step 1: Setup Environment Variables**

Locate the `docker-compse.yaml` file and replace the following environment variables for both services: `MYSQL_ROOT_PASSWORD`, `MYSQL_USER`, `MYSQL_PASSWORD` respectively; it's best to keep the database names the same.

2. **Step 2: Run Docker Compose**

Open the directory in a terminal window in an environment where Docker is installed. For instructions on how to do that consult the Docker manual and resources.

The containers are created by running `docker-compose up`.