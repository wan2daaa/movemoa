const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    userEmail: {type: String, required: true, unique: true},
    userPassword: {type: String, required: true},
    userName: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);
