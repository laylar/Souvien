const mongoose = require('mongoose');
//const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, {
        timestamps: true
});

const userSchema = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: false
    },
    entries: [entrySchema]
});

//planning to use Passport for user logins
//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);