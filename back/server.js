/////////////////////////
//Server - starts our app's database connection and server
/////////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
//Require in models:
//(this is a necessary step that loads our models and registers them with mongoose)
const models = require('./index').models;
//Require in routes:
const routes = require('./index').routes;

//Connect to database and start server:
//(whatever we put after 'localhost/' will automatically be the name of database)
mongoose.connect('mongodb://localhost/blog-app');
//Store connection as variable
const db = mongoose.connection;
//Start the server after successful database connection:
db.on('open', () => {
  startServer();
});

//Start the server and listen on port 4444:
const startServer = () => {
  //Configure router:
  app.use('/', routes.home);
  app.use('/posts', routes.posts);
  //Launch server on port 4444:
  app.listen(4444, () => {
    console.log('App listening on port 4444');
  });
}
