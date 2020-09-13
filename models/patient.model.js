const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    resourceType: {
        type: String
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pattient'
    },
    patient_adminitration: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient_adminitration'
    }],
    generalPractitioner: { // Patient's nominated primary care provider
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Practitioner'
    },
    active: {
        type: Boolean
    },
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
    passport: {
        type: String,
    },
    expiredDate: {
        type: Date,
    },
    pictureOfPassport: {
        type: String,
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
    password2: {
        type: String,
        required: 'This field is required.',
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: Number // patient 
    },
})



// export model 
module.exports = mongoose.model('Patient', patientSchema);