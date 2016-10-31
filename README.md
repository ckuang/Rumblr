# Overview
Your overall goal is to build a simple blog app (from scratch) that will display posts and let you easily create and save new posts. Basically, a simplified version of something like Tumblr.

The project will be broken up into steps. You should aim to complete each step in roughly 1 - 2 days.

# Step 1
## Goal
- get your database and server setup
- send a "Hello World" response when you visit the homepage ('localhost:3000/')
- send a JSON response of at least 3 posts from your database when you visit a '/posts' page ('localhost:3000/posts').

## To complete Step 1 you'll need to:
- [Install MongoDB, Mongoose, Express](./docs/installing-mongo-mongoose-express.md)
- [Create your project organization/structure](./docs/file-structure.md)
- [Create a `server.js` file that](./docs/setting-up-server.md):
  - Creates a connection to mongoose database connection
  - After connected to a database, uses `app.listen` to create a basic express server
- [Create a 'posts' model file that sets up the schema and model for blog posts](./docs/schemas-and-models.md)
- [Setup basic routing](./docs/express-routing-intro.md):
  - Create a route that sends a response of 'Hello World' when you visit the home page ('/')
  - Create a route that sends a response of all of the posts in your database  when you visit the posts page ('/posts')
  - Create a route that creates a blog post and saves it to your database when you send a `post` request ot your posts page ('/posts')

# Helpful tools:
- [Postman](https://www.getpostman.com/): Send `get` and `post`requests to your site to easily test your api
- [The mongo shell](./docs/mongo-shell.md)
- [Nodemon](https://github.com/remy/nodemon): Automatically reload your server file on changes
- [JSON Viewever Chrome Extension](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh)

# Resources
- [Scotch.io Intro to Mongoose](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications)
- [Scotch.io Building a RESTful API using Express and Node](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)
