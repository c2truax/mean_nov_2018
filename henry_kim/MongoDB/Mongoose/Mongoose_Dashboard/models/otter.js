var mongoose = require('mongoose');

var OtterSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, "Otter requires a name!"],
    minlength: [3, "Otter's name should have atleast 3 characters"],
    default:"",
  },

  age: {
  type: Number,
  required: [true, "Age is required!"],
  min: [0, "Otter should be born"],
  },

  personality:{
  type: String,
  requied: [true, "Enter a personality"],
  minlength: [4, "Personality should be atleast 4 character's long"],
  },

},  {timestamps: true });

var Otter = mongoose.model('Otter', OtterSchema);
module.exports = Otter;
