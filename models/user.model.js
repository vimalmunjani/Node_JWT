const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    date: Date
});

const User = mongoose.model('User',UserSchema);

module.exports = User;