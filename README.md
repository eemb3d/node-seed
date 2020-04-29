# Dockerized Node Seed Project

> Dockerized Node base app

## Node info
- Node https://nodejs.org/api/synopsis.html
    - Node Best Practices https://github.com/goldbergyoni/nodebestpractices
    
## Express info
- Express https://expressjs.com/en/starter/hello-world.html
    - Express Best Practices https://expressjs.com/en/advanced/best-practice-security.html

## GraphQL info
- GraphQL https://graphql.org/learn/
    - GraphQL HTTP Server Middleware https://github.com/graphql/express-graphql

## Docker info
- Docker https://docs.docker.com/get-started/
    - Docker Bench for Security https://github.com/docker/docker-bench-security
    - Docker Best Practices https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md

## Mongo info
- Node.js https://mongodb.github.io/node-mongodb-native/
    - Node.js (Mongoose) http://mongoosejs.com/

## MUST 
 - DO NOT RUN NODE WITH USER PRIVILEGE, USE NGINX & others (check conf file)
 - Making the source code is comprehensible and ready to deploy to prod from the start
 - Ensure you are using an LTS version of Node.js   
 - Make your code production-ready AGAIN
 - Use naming conventions
 - Use latest ecmascript (arrow fun, let/const, new operator, async/await ...)
 - Constantly inspect for vulnerable dependencies (npm audit)
 - Inspect for outdated packages (npm outdated or npm-check-updates)
 - Lock dependencies (npm ci)
 - Refactoring. Removing "Code Smells" (bad coding practices)
 - Use log files wisely
 - Delegate anything possible (e.g. gzip, SSL) to a reverse proxy 
 - Get your frontend assets out of Node (nginx, S3, CDN) 
 - Be stateless, kill your Servers almost every day
 - Set NODE_ENV=production
 - Use ESLint
 - Different tests must run on different scenarios (Tag them)
 - Build test before code, and check testcoverege
 - Fast and automated deployments (Docker combined with CI)
 - ERROR HANDLING ...
 - ...