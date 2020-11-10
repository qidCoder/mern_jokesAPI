// in the jokes.routes file: import * from your controller file and add an express route for every route listed in the wireframe

//import the controller so when a URL is visited, the request will be routed to a particular function in the controller which triggers the object with all the mothods on it
const jokeController = require("../controllers/jokes.controller");

//export a function that needs access to our app since it will add the HTTP methods and URL to it
module.exports = (app) => {
    //returns a list of all jokes
    app.get("/api/jokes", jokeController.getAll);

    //returns a random joke - must be before the getOne route
    app.get("/api/jokes/random", jokeController.getRandom);
        
    //returns the joke with matching "id"
    app.get("/api/jokes/:id", jokeController.getOne);

    //creates a new joke
    app.post("/api/jokes/new", jokeController.create);

    //updates the joke with matching "id"
    app.put("/api/jokes/update/:id", jokeController.update);

    //removes the joke with matching "id"
    app.delete("/api/jokes/delete/:id", jokeController.delete);
}

//now we need to connect the routes to our app
//the app is coming from server.js so we will require this file in there and be passed back the app and then it will have all the routes on the app