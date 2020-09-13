const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const { use } = require('../route/userRoute');
const User = mongoose.model('User');
const Patient = mongoose.model('Patient');
// const Consultant = mongoose.model('Consultants');
// const Representative = mongoose.model('Representative');

module.exports.accountLogin = function(req, res, next) {
    var params = req.body;
    console.log(req.body)
    var type = req.body.type;

    if (type == 2) {
        User.findOne({ email: req.body.email, password: req.body.password }).then(function(user) {
            console.log(user);
            if (user) {
                req.body.userId = user._id;
                req.body.userType = user.type;
                req.body.userFirstname = user.firstName;
                req.body.userLaststname = user.lasttName;

                Consultant.findOne({ account: user._id }).then(function(consultant) {
                    console.log(consultant);
                    if (consultant) {
                        req.body.consultantId == consultant._id;
                    }
                    return res.redirect('/consultant');
                });
            } else {
                return res.redirect('/consultant');
            }
        });
    } else if (type == 3) {
        User.findOne({ email: req.body.email, password: req.body.password }).then(function(user) {
            console.log(user);
            if (user) {
                req.body.userId = user._id;
                req.body.userType = user.type;
                req.body.userFirstname = user.firstName;
                req.body.userLaststname = user.lasttName;

                Representative.findOne({ account: user._id }).then(function(representative) {
                    console.log(representative);
                    if (representative) {
                        req.body.representativeId == representative._id;
                    }
                    return res.redirect('/representative');
                });
            } else {
                return res.redirect('/representative');
            }
        });
    } else
    if (type == 1) {
        User.findOne({ email: req.body.email, password: req.body.password })
            .exec(async function(err, user) {
                console.log(user);
                if (user) {
                    console.log(req.body);
                    req.body.userId = user._id;
                    req.body.userType = user.type;
                    req.body.userFirstname = user.firstName;
                    req.body.userLaststname = user.lasttName;
                    return res.render('./patient/home', {user: user});
                }
            });
    } else {
        Patient.findOne().exec(function(err, patient) {});
    }
}

const storageEngine = multer.diskStorage({
    destination: './public/upload',
    filename: function(req, file, fn) {
        fn(null, new Date().getTime().toString() + '-' + file.fieldname + path.extname(file.originalname));
        //     console.log(file)
    }
});
const uploadPhoto = multer({
    storage: storageEngine,
    limits: {
        fileSize: 20000000
    },
    fileFilter: function(req, file, callback) {
        validateFile(file, callback);
    }
}).single('pictureOfPassport');
var validateFile = function(file, cb) {
    allowedFileTypes = /jpeg|jpg|png|gif/;
    const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedFileTypes.test(file.mimetype);
    if (extension && mimeType) {
        return cb(null, true);
    } else {
        cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
    }
}

exports.accountRegister = function(req, res) {
    console.log(req.body);
    // if (req.body.email && req.body.fullname && req.body.password && req.body.repassword) {
    //     console.log(req.body);
    var user = new User();
    uploadPhoto(req, res, (error) => {
        if (error) {
            console.log("Error 1");
        } else {
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.orFullname = req.body.orFullname;
            user.dateOfBirth = req.body.dateOfBirth;
            user.gender = req.body.gender;
            user.nationality = req.body.nationality;
            user.contryOfResidence = req.body.contryOfResidence;
            user.passport = req.body.passport;
            user.expiredDate = req.body.expiredDate;
            if (req.file == undefined) {
                user.pictureOfPassport = null;
            } else {
                var fullPath = "patient/" + req.file.filename;
                user.pictureOfPassport = fullPath;
            }
            user.email = req.body.email;
            user.mobile = req.body.mobile;
            user.username = req.body.username;
            user.password = req.body.password;
            user.password2 = req.body.password2;
            user.type = 1;
            user.save((err, doc) => {
                if (!err)
                    res.redirect('/login');
                else {
                    if (err.name == 'ValidationError') {
                        handleValidationError(err, req.body);
                        res.render("register", {
                            viewTitle: 'Register',
                            user: req.body,
                            layout: false,
                        });
                    } else
                        console.log('Error during record insertion : ' + err);
                }
            });
        };
    });

    function handleValidationError(err, body) {
        for (field in err.errors) {
            switch (err.errors[field].path) {
                case 'firstName':
                    body['firstNameError'] = err.errors[field].message;
                    break;
                case 'lastName':
                    body['lastNameError'] = err.errors[field].message;
                    break;
                case 'email':
                    body['emailError'] = err.errors[field].message;
                    break;
                default:
                    break;
            };
        };
    };
}