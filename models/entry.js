const mongoose = require("mongoose");
//const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  day: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  dayname: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

//planning to use Passport for user logins
//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Entry", entrySchema);
