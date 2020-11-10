// in the jokes.model file create a JokeSchema and export the mongoose.model("joke", JokeSchema)

//import mongoose because we will use mongoose to enforce a structure to our models so when we insert a document, mongoose will check if it has all the key/value pairs that are required. If not, we will give an error message.
const mongoose = require("mongoose");

//make a new instance of a schema or class
const JokeSchema = new mongoose.Schema({
        setup: {
            type: String,
            // "{PATH}" will be replaced  with the field name, here that will be "setup". You can hard code it but if you ever update the key name you have to update the hard code too
            required: [true, "{PATH} is required."],//error message/validation
            minlength: [10, "{PATH} must be at least {MINLENGTH} characters"]
        },
        punchline: {
            type: String,
            // "{PATH}" will be replaced  with the field name, here that will be "punchline". You can hard code it but if you ever update the key name you have to update the hard code too
            required: [true, "{PATH} is required."],//error message/validation
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
        },
    },
    { timestamps: true}//this is optional and will automatically add a timestamp with created_at and updated_at to our model
);

//now that we created the schema above, we need to register it to mongoose
//Tell mongoose what we want our model to be called
//It will take the string and pluralize it for the collection name ("Jokes")
//The Schema will enforce the structure on this model when we try to create or update it
const Joke = mongoose.model("Joke", JokeSchema);

//finally, let's export it so we can use it in the CRUD functions we will create
module.exports = Joke;