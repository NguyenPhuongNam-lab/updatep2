const { fileLoader } = require('ejs');
var mongoose = require('mongoose');

var detailSchema = new mongoose.Schema({
    resourceType: {
        type: String
    },
    identifier: {
        type: String,
    },
    hospitalName: {
        type: String,
        required: 'This field is required.'
    },
    address: {
        type: String,
        require: 'This field is required.'
    },
    phoneNumber: {
        type: String,
        require: 'This field is required.'
    },
    subsidiaries: {
        type: String,
    },
    description: {
        type: String,
        require: 'This field is required.'
    },
    imageHospital: {
        type: String,

    },
});

module.exports = mongoose.model('Hospital', detailSchema, 'Hospital');