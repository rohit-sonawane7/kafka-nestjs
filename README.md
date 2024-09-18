# Kafka-based Microservices with NestJS (Monorepo)

This project is a **monorepo** containing two separate microservices built with [NestJS](https://nestjs.com/) that communicate via **Apache Kafka**. Each service is isolated with its own configuration but shares the same codebase repository for easy management and collaboration.

## Project Structure

```bash
/nest-kafka-monorepo
   /service-1         # First microservice (e.g., Producer)
      /src            # Source code for Service 1
      package.json    # Dependencies and scripts for Service 1
      tsconfig.json   # TypeScript configuration for Service 1
      .env            # Environment variables for Service 1

cd service-1
npm install
npm run start


   /service-2         # Second microservice (e.g., Consumer)
      /src            # Source code for Service 2
      package.json    # Dependencies and scripts for Service 2
      tsconfig.json   # TypeScript configuration for Service 2
      .env            # Environment variables for Service 2
   .gitignore         # Files/folders to be ignored by Git
   README.md          # Project documentation


cd service-2
npm install
npm run start
