var mongoose = require('mongoose');

var CatSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Name is required'], minlength: [2, 'Name must be at least two characters']},
  age: {type: Number, required: [true, 'Age is required'], min: [0, 'Age must be greater than 0']}
}, {timestamps: true});
mongoose.model('Cat', CatSchema);

var Cat = mongoose.model('Cat', CatSchema);
module.exports = Cat;
