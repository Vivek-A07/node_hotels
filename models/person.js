const { uniq } = require('lodash')
const mongoose = require('mongoose')
const { type } = require('os')

//Define the person schema
// const mongoose = require('mongoose');

// Define the schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true,
    },
    mobile: {
        type: String, // Changed to String to support all phone number formats
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    }
});

// Create the Person model
const Person = mongoose.model("Person", personSchema);

module.exports = Person;


