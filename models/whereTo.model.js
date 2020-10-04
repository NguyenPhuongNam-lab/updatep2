const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const where_toSchema = new Schema({
    resourceType: {
        type: String,
    },
    identifier: {
        type: String,
        required: 'this field is required'
    },
    countries: {
        type: String,
    },
    specialty: {
        type: Date,
    },
    expectedTimeToCome: {
        type: Date,
    },
})

module.exports = mongoose.model('Whereto', where_toSchema);