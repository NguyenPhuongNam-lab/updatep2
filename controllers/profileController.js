const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.InserData = function(req, res) {
    User.find({_id: req.params.id})
    .then(user => {
        res.render('./patient/profile', { user :user})
    })
    .catch(err => {
        console.log('Error: ', err);
        throw err;
    })
};

// exports.EditData = function(req, res){
//     User.findById(req.params.id, (err, user) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//         res.render('./patient/profile-edit', { user : user });
//     })
// };

exports.UpdateData = function(req, res){
    let id = req.params.id;
    User.findByIdAndUpdate(
        { _id: id },
        { $set: {   firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    orFullname: req.body.orFullname,
                    dateOfBirth: req.body.dateOfBirth,
                    gender: req.body.gender,
                    nationality: req.body.nationality,
                    countryOfResidence: req.body.countryOfResidence,
                    passport: req.body.passport,
                    expiredDate: req.body.expiredDate,
                 } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/home')
        })
}
