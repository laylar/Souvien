const mongoose = require('mongoose');
//const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

//planning to use Passport for user logins
//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Quote', quoteSchema);