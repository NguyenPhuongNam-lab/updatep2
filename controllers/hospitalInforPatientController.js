const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Hospital = mongoose.model('Hospital');

exports.InserData = function(req, res) {
    User.findById(req.params.id)
    .then(() => {
        Hospital.find({ _id: req.params.id })
        .then(hospital => {
            res.render('./patient/hospital-information', { hospital: hospital , userId: req.session.userId})
        })
    })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
};