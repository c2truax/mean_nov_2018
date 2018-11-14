
Running MongoDB
    1. create data folder then create db folder in that data folder
    2. make sure you are in that db folder and run "sudo mongod"

To close MongoDB
    1. "control + c "
    or
    1. open new terminal window and type "mongo"

    2. type in "ps -ax | grep mongo"
        then copy the number on the left of the row that shows 'sudo mongo' (or if that's not there, just 'mongo')  This is the process ID of the mongod command you ran.  Take that number and type
    3. type in "sudo kill *that_number*"

To open Mongo terminal
    1. open terminal and enter "mongo"

To clear Mongo terminal
    1. to clear, type "cls"

Compare SQL Vs Mongo
    Database Type:	SQL	vs Mongo
    Database	Schema	vs Database (db)
    Collection of related records	Tables	vs Collections
    Each one record in the collection of records	Row / Record vs Document

Mongo Terminal Commands
    "show dbs" to show all databases
    "db" to show current databases
    "use db_name" to change to database, if database does not exist then it will ve create and switch to it
    "db.dropDatabase()" to drop database currrently in
    "show collections" to view all collections in current db
    "db.createCollection("collection_name")" to create collection for example db.createCollection("ninjas")
    "db.collection_name.drop()" to destroy collection for example db.ninjas.drop()

CRUD
    to create
        1. db.COLLECTION_NAME.insert({YOUR_JSON_DOCUMENT})
        example: db.ninjas.insert({name: "Trey", belt: "black", status: "awesome"})

    to find
        1. db.COLLECTION_NAME.find({YOUR_QUERY_DOCUMENT})
        example: db.ninjas.find({name: "Trey"})
        2. to show or find all
            db.ninjas.find({})
            db.ninjas.find()
            db.ninjas.find().pretty()
        3. find by object id
            example: db.ninjas.find({_id: ObjectId("5462a78e514e258182f4c69a")})
// Notice: You can't just pass the string of characters, you must pass it as an ObjectId.

    to destroy
        1. db.COLLECTION_NAME.remove({YOUR_QUERY_DOCUMENT}, BOOLEAN)
        example:
        db.ninjas.remove({belt: "yellow"})
        db.ninjas.remove({belt: "yellow"}, false) // this query would have the same effect as the one above.

    to update
        1.db.ninjas.update({name: "Trey"}, {$set: {location: "Mountain View"}})

        bad example"
        db.ninjas.update({name: "Trey"}, {location: "Mountain View"})

Mongoose Commands
https://mongoosejs.com/docs/index.html

1. Creating Schema

// Create a Schema for Users
var UserSchema = new mongoose.Schema({
 name: {type: String},
 age: {type: Number}
}, {timestamps: true})
// Store the Schema under the name 'User'
mongoose.model('User', UserSchema);
// Retrieve the Schema called 'User' and store it to the variable User
var User = mongoose.model('User');

2.Finding all users

// Using the User Schema...
// ...retrieve all records matching {}
User.find({}, function(err, users) {
 // Retrieve an array of users
 // This code will run when the DB is done attempting to retrieve all matching records to {}
})

3. Finding all users based on a requirement
// ...retrieve all records matching {name:'Jessica'}
User.find({name:'Jessica'}, function(err, users) {
 // Retrieve an array of users matching the name. Even if 1 record is found, the result will be an array the size of 1, with 1 object inside. (Notice, if we are expecting to retrieve one record, we may want to use findOne and retrieve the object as oppose to an array the size of one.copy
 // This code will run when the DB is done attempting to retrieve all matching records to {name:'Jessica'}

4. Finding one user
// ...retrieve 1 record (the first record found) matching {}
User.findOne({}, function(err, user) {
 // Retrieve 1 object
 // This code will run when the DB is done attempting to retrieve 1 record.
})

5.Creating a sample user
// ...create a new instance of the User Schema and save it to the DB.
var userInstance = new User()
userInstance.name = 'Andriana'
userInstance.age = 29
userInstance.save(function(err){
 // This code will run when Mongo has attempted to save the record.
 // If (err) exists, the record was not saved, and (err) contains validation errors.
 // If (err) does not exist (undefined), Mongo saved the record successfully.
})

6.Delete all users
// ...delete all records of the User Model
User.remove({}, function(err){
 // This code will run when the DB has attempted to remove all matching records to {}
})

7.Delete one user
// ...delete 1 record by a certain key/value.
User.remove({_id: 'insert record unique id here'}, function(err){
 // This code will run when the DB has attempted to remove one matching record to {_id: 'insert record unique id here'}
})

8.Update any records
// ...update any records that match the query
User.update({name:'Andriana'}, {$push: {pets: {name: 'Skippy', type: 'cactus' }}}, function(err){
 // This code will run when the DB has attempted to update the matching record.
})
// another way to update a record
User.findOne({name: 'Andriana'}, function(err, user){
 user.name = 'Andri';
 user.pets.push({name: 'Skippy', type: 'cactus'});
 user.save(function(err){
     // if save was successful awesome!
 })
})


Mongoose Validations
https://mongoosejs.com/docs/validation.html

// require the mongoose module
var mongoose = require('mongoose');
// to make a model, you can first define a schema, which is just the BLUEPRINT for a model
var UserSchema = new mongoose.Schema({
    first_name:  { type: String, required: true, minlength: 6},
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
}, {timestamps: true });

Displaying Validation errors MUST HAVE SESSIONS!
npm install -save express-flash

on server.js side
...  // set up other middleware, such as session
const flash = require('express-flash');
app.use(flash());
app.post('/users', function (req, res){
    var user = new User(req.body);
    user.save(function(err){
        if(err){
            // if there is an error upon saving, use console.log to see what is in the err object
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/');
        }
        else {
            res.redirect('/users');
        }
    });
});
Creating Custom Error Messages
// Grab dependencies:
var mongoose = require('mongoose');

// Setup a schema:
var UserSchema = new mongoose.Schema (
    {
        username: {
            type: String,
            minlength: [2, 'Username must be at least 2 characters.'],
            maxlength: [20, 'Username must be less than 20 characters.'],
            required: [true, 'Your username cannot be blank.'],
            trim: true,
            unique: true, // username must be unique
            dropDups: true,
        }, // end username field
    },
    {
        timestamps: true,
    },
);

// Export the schema:
module.exports = mongoose.model('User', UserSchema);

on index.ejs.side
<!-- tip to easily see objects printed in full instead of [object Object] -->
<%- JSON.stringify(messages) %>
<!-- based on the structure of your messages, determine how to display them -->
<% if(messages.registration) { %>
     <% for (var x of messages.registration) { %>
      <h3><%= x %></h3>
     <% } %>
 <% } %>

 MODULARIZATION

    LETS SAY in dictionary.js file
var dictionary = ['apple', 'banana', 'peanut', 'butter', 'grapes', 'jelly'];

    LETS SAY in search.js file
function search(word, dictionary) {
  for(w in dictionary) {
    if(dictionary[w] == word) {
      return true;
    }
  }
  return false;
}

    LETS EXPORT dictionary and have search require it!
    var dictionary = ['apple', 'banana', 'peanut', 'butter', 'grapes', 'jelly'];
    module.exports = dictionary

    var dictionary = require('./dictionary.js');
    function search(word, dictionary) {
      for(w in dictionary) {
        if(dictionary[w] == word) {
          return true;
        }
      }
      return false;
    }

    HOW DOES IT WORK?
        Let's go over how require and module.exports are working here:

        In search.js we require dictionary.js; here, require is a function that takes in a parameter. The parameter is the location of the file we are requiring.
        require first executes the code in the file and then passes back the value inside of module.exports as a return value
        Since we pass the dictionary variable into the module.exports, when we require it we can store the returned value into another variable.
