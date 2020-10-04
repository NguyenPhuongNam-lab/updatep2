const express = require('express');
const session = require('express-session');
const path = require('path');
const multer = require('multer');
const { use } = require('../route/userRoute');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.InserData = function(req, res) {
    User.find({_id: req.params.id})
    .then(user => {
        res.render('./patient/profile', { title: 'Dashboard', user : user, userId: req.session.userId})
    })
    .catch(err => {
        console.log('Error: ', err);
        throw err;
    })
};
    // User.findById(req.params.id, (err, doc) =>{
    //     if(!err){
    //         console.log(doc);
    //         res.render('./patient/profile', {
    //             title: "Profile",
    //             user: doc
    //         });
    //     }
    // })
// }

exports.EditData = function(req, res){
    User.find({_id: req.params.id})
    .then(user => {
        res.render('./patient/profile-edit', { title: 'Dashboard', user : user, userId: req.session.userId})
    })
    .catch(err => {
        console.log('Error: ', err);
        throw err;
    })
};
//     User.findById(req.params.id, (err, doc) =>{
//         if(!err){
//             console.log(doc);
//             res.render('./patient/profile-edit', {
//                 title: "Profile-edit",
//                 user: doc
//             });
//         }
//     })
// }



exports.UpdateData = function(req, res){   
    User.findByIdAndUpdate(
        { _id: req.params.id },
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
        .then((user) => {
            res.redirect('/profile/'+ req.session.userId)
        })
    }

