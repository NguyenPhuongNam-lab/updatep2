const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const register_a_supportSchema = new Schema({
    resourceType: {
        type: String,
    },
    identifier: {
        type: String,
        required: 'this field is required'
    },
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    patientProfile: {
        type: File,
    },
})

module.exports = mongoose.model('Registerasupport', register_a_supportSchema);