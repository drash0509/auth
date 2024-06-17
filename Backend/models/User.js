// User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 5 },
});

const User = mongoose.model('User', userSchema);
User.createIndexes();
module.exports = User;
