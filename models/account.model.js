const mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    resourceType: {
        type: String
    },
    identifier: {
        type: String,
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
        type: String,
        required: true
    },
    dateOfbirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    countryOfResidence: {
        type: String,
        required: true
    },
    Passport: {
        type: String,
        required: true
    },
    issuedBy: {
        type: String,
        required: true
    },
    expiredDate: {
        type: Date,
        required: true
    },
    pictureOfPassport: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: 'This field is required.'
    },
    password2: {
        type: String,
        required: 'This field is required.'
    },
    picture: {
        type: images,
    },
    date: {
        type: Date,
        default: Date.now
    },
    controlIdentifier: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }],
    update: {
        type: Date,
    }
})

userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

userSchema.path('password').validate((val) => {
    return /[a-zA-Z0-9]{6,12}/.test(val);
}, 'Invalid password');

//authenticate input against database
userSchema.statics.authenticate = function(email, password, callback) {

}

// export model 
mongoose.model('Account', accountSchema);