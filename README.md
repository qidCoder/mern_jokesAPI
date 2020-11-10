# mern_jokesAPI
Coding Dojo Assignment


## Jokes API
To solidify what we've read about mongoose commands and express, lets create a new express project from scratch called "Jokes."

![wireframe](






 - [ ] Create a project folder named "Jokes"
  - [ ] within "Jokes" create a modularized folder structure (server ==> controllers, routes, models, config, server.js)
  - [ ] initialize a package json file using npm
  - [ ] install express and mongoose
  - [ ] create a mongoose.config.js file and setup your mongoose.connect function
  - [ ] create a jokes.model.js, jokes.controller.js, and a jokes.routes.js in the applicable folders
  - [ ] in the jokes.model file create and JokeSchema and export the mongoose.model("joke", JokeSchema)
  - [ ] in the jokes.controller import your model from the models file
  - [ ] Export a function to get all jokes
 - [ ]  Export a function to get a single joke
  - [ ] Export a function to create a joke
  - [ ] Export a function to update a joke
  - [ ] Export a function to delete a joke
  - [ ] in the jokes.routes file: import * from your controller file and add an express route for every route listed in the wireframe
  - [ ] In your server.js file: setup express, import your joke routes, and run your server
  - [ ] Use Postman to create new jokes and use the browser to view them
  - [ ] Use Postman to perform the POST DELETE and PUT operations and use the browser to GET them
