var mongoose = require('mongoose');

var consultantSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'This field is required.'
    },
    lastName: {
        type: String,
        required: 'This field is required.'
    },
    orFullname: {
        type: String
    },
    dateOfbirth: {
        type: Date
    },
    gender: {
        type: String
    },
    nationality: {
        type: String
    },
    countryOfResidence: {
        type: String
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        required: 'This field is required.',
    },
    type: {
        type: Number
    }
})

module.exports = mongoose.model('listc', consultantSchema, 'listc');