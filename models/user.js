const mongoose = require('mongoose');
//const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;
const entry = require('../models/entry')

const userSchema = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: false
    },
    entries: [entry]
});

//planning to use Passport for user logins
//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);