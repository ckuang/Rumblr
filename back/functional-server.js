/////////////////////////
//Example of a more functional programming style server
/////////////////////////

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const models = require('./index').models;
//Require in routes:
const routes = require('./index').routes;

const startDB = (startServer) => {
  mongoose.connect('mongodb://localhost/blogger');
  const db = mongoose.connection;
  db.on('open', () => {
    startServer();
  })
}

const configRouter = (app) => {
  return app
    .use('/', routes.home)
    .use('/posts', routes.posts);
}

const startServer = (app) => {
  app.listen(4444, () => {
    console.log('App listening on port 4444');
  });
}

startDB((startServer.bind(this, configRouter(app))));
