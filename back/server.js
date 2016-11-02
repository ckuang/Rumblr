/////////////////////////
//Server - starts our app's database connection and server
/////////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const path = require('path')
const rootPath = path.join(__dirname, '../../')
var bodyParser = require('body-parser');


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
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static('bundle'))
  app.use('/posts', routes.posts);
  app.use('/', routes.home);
  //Launch server on port 4444:
  app.listen(3000, () => {
    console.log('App listening on port 3000');
  });
});
