var mongoose = require('mongoose');

var representativeSchema = new mongoose.Schema({
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
    dateOfBirth: {
        type: Date
    },
    address: {
        type: String
    },
    Gender: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    hospital: {
        type: String
    },
    position: {
        type: String
    }
})

module.exports = mongoose.model('representation', representativeSchema, 'representation')