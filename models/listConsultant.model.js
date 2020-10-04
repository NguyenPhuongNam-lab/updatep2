var mongoose = require('mongoose');

var consultantSchema = new mongoose.Schema({
    resourceType: {
        type: String,
    },
    identifier: {
        type: String,
        required: 'this field is required'
    },
    fullName: {
        type: String
    },
    Age: {
        type: String
    },
    dateOfbirth: {
        type: Date
    },
    Gender: {
        type: String
    },
    Professional: {
        type: String
    },
    Address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    Email: {
        type: String
    }
});

module.exports = mongoose.model('listc', consultantSchema, 'listc');