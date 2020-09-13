const express = require('express');
const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.whereto = function(req, res, next) {
    console.log(req.body);
    var user = new User();
    user.countries = req.body.countries;
    user.diagnosis = req.body.diagnosis;
    user.inspecialty = req.body.inspecialty;
    user.expected = req.body.expected;
    user.doyouneed = req.body.doyouneed;
    user.save((err, doc) => {
        if (!err)
            res.redirect('/home');
    })
}