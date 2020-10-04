const express = require('express');
const mongoose = require('mongoose');
const hospital = mongoose.model('Hospital');
const User = mongoose.model('User');

exports.watchList = function(req, res) {
    User.findById(req.params.id)
    .then(() => {
    hospital.find({})
        .then(Hospitals => {
            res.render('./patient/watching-list', { Hospitals: Hospitals,  userId : req.session.userId })
        })
    })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
};
