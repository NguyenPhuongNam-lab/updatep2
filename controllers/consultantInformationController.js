const express = require('express');
const mongoose = require('mongoose');
const Listc = mongoose.model('listc')

exports.LoadInfor = function(req, res) {
    Listc.findById(req.params.id, (err, listc) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('./admin/ConsultantInformation', { listc: listc });
    })
};

exports.InsertInfor = function(req, res) {
    let id = req.params.id;
    Listc.findByIdAndUpdate(
        { _id: id },
        { $set: {  
                    orFullname: req.body.orFullname,
                    dateOfBirth: req.body.dateOfBirth,
                    gender: req.body.gender,
                    nationality: req.body.nationality,
                    countryOfResidence: req.body.countryOfResidence,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    username: req.body.username,
                    password: req.body.password
                 } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/list-consultant')
        })
};

