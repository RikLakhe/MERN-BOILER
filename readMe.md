## MERN - BOILER
##### Heroku website: [LAKHE-MERN](https://lakhe-mern.herokuapp.com/) (LEARNING PURPOSE)

A MERN boilerplate with basic CRUD operations. Using :
- MongoDB (DATABASE)
- Express (BACKEND)
- React (FRONTEND)
- Node (Development platform)

## Get Started Instructions
##### 1.Prerequisites
- [NodeJs](https://nodejs.org/en/)
- [NPM](https://npmjs.org/) - Node package manager

##### 2.Installation
Fork, then download or clone the repository :
```bash
git clone https://github.com/<your-user-name>/MERN-BOILER.git
```
On the command prompt run the following commands to concurrently install:
```bash
cd MERN-BOILER
npm build
```
Finally, start the application:
```bash
npm start
```

## Available Scripts

In the project directory, you can run:

`npm start` - concurrently starts the development server with hot reloading enabled

`npm build` - install back-end and front-end packages then build frontend

`npm run server` -run server using [nodemon](https://www.npmjs.com/package/nodemon)

## File Structure
##### client
MERN-BOILER project's client directory contains all the shared components, routes, modules. <br/> 
Build from <a href="https://github.com/facebook/create-react-app"><strong> create-react-app</strong></a>
##### Server
MERN-BOILER project uses express web framework. Our app sits in index.js

## Application SECURITY 
###### (MAIN LEARNING PURPOSE)
Our MERN-BOILER project uses [COOKIES](https://expressjs.com/en/resources/middleware/cookie-parser.html) and [JWT TOKEN](https://jwt.io) for authentication and validation in production build. 
- When in production mode, we build back-end and front-end communication authentication using JWT TOKEN then COOKIES.
- When in development mode, we build back-end and front-end communication authentication using only JWT TOKEN for local machine development and testing.
