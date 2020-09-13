const express = require('express');
const mongoose = require('mongoose');
const Consultant = mongoose.model('listc');

exports.Newconsultant = function(req, res) {
    if(req.body.firstName && req.body.lastName && req.body.email && req.body.password){
            console.log(req.body);
            var user = new Consultant();
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;
                user.orFullname = req.body.orFullname;
                user.dateOfBirth = req.body.dateOfBirth;
                user.gender = req.body.gender;
                user.nationality = req.body.nationality;
                user.countryOfResidence = req.body.countryOfResidence;
                user.email = req.body.email;
                user.mobile = req.body.mobile;
                user.username = req.body.username;
                user.password = req.body.password;
                user.type = 2;
                console.log(user);
                user.save((err, doc) => {
                    if (!err)
                        res.redirect('/list-consultant');
                    else {
                        if (err.name == 'ValidationError') {
                            handleValidationError(err, req.body);
                            res.render("Create Consultant", {
                                viewTitle: 'Create Consultant',
                                user: req.body,
                                layout: false,
                            });
                        } else
                            console.log('Error during record insertion : ' + err);
                    }
                })
            }
            else{
                res.redirect('/create-consultant')
            }
};
    
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