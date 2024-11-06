const mongoose = require('mongoose');
require('dotenv').config();
const MongoURL = process.env.MONGO_URL;
mongoose.connect(MongoURL);

// Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// Created a model 
const User = mongoose.model('User', userSchema);

module.exports = {
    User
};