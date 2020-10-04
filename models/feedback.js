const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    resourceType: {
        type: String,
    },
    identifier: {
        type: String,
        required: 'this field is required'
    },
    fullname: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    sendFeedback: {
        type: String,
        required: 'This field is required.'
    },
})

module.exports = mongoose.model('Feedback', feedbackSchema);