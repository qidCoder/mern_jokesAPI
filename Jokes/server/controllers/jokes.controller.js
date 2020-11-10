//import the model
//Triggers the code in jokes.model to be executed and export the model
const Joke = require("../models/jokes.model");

//export an object with a bunch of methods in it
module.exports = {
    //the function receives a request - a POST request from the form on the UI
    //key:value pair pattern, long-form for methods
    //create a joke
    create: function( req, res){
        console.log("create method executed");

        Joke.create(req.body)
        .then( (joke) => {
            //we get back the joke that was created by the database and respond with JSON and pass back that joke
            //joke is the joke from the DB now, which has a DB _id, createdAt, etc...
            //send it back in the response to the client
            res.json(joke);
        })
        .catch( (err) => {
            res.json(err);
        })
    },

    //key:value pair pattern, short-hand for methods
    //retrieve all jokes created in the database
    getAll(req, res){
        console.log("getAll method executed");

        //if you pass in no arguments, it finds everything
        Joke.find()
        .then( (jokes) => {
            res.json(jokes);
        })
        .catch( (err) => {
            res.json(err);
        })
    },

    //retrieve a single joke
    //specific record comes from the id passed in through the URL (parameters)
    getOne(req,res){
        console.log("getOne method executed", "url params: ", req.params);

        //find() always returns an array even if you only have one item. That's why we can use findById() to just get a single object back
        Joke.findById(req.params.id)
        .then( (joke) => {
            res.json(joke);
        })
        .catch( (err) => {
            res.json(err);
        })
    },

    delete(req,res){
        console.log("delete method executed", "url params: ", req.params);

        //find() always returns an array even if you only have one item. That's why we can use findById() to just get a single object back
        Joke.findByIdAndDelete(req.params.id)
        .then( (joke) => {
            res.json(joke);
        })
        .catch( (err) => {
            res.json(err);
        })
    },

    update(req,res){
        console.log("update method executed", "url params: ", req.params);

        //req.body is equivalent to request.post in Django
        //req.body is the new updated info from the submitted form
        //form data is in the req.body - which is the body of the request, the main content of the request
        Joke.findByIdAndUpdate(req.params.id, req.body, {
            //we have to validate the data because it doesn't do it by default on updates
            //this is because if it's in the database already, that means it already passed validations
            runValidators: true,
            //return the updated object rather than the old info
            new: true
        })
        .then( (joke) => {
            res.json(joke);
        })
        .catch( (err) => {
            res.json(err);
        })
    },

    //returns a random joke
    getRandom(req,res){
        console.log("getRandom method executed");

        // Get the count of all users
        Joke.count().exec((err, count) => {

        // Get a random entry
        var random = Math.floor(Math.random() * count)
  
        // Again query all users but only fetch one offset by our random #
        //findOne() is built-in to Mongoose
        Joke.findOne().skip(random).exec((err, result) => {
            if(err){
                return res.json(err)
            }
    
            // Tada! random user
            return res.json(result);
        })
        
        
    })
    }

}


