const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.feedback = function(req, res, next) {
    console.log(req.body);
    var user = new User();
    user.fullname = req.body.fullname;
    user.email = req.body.email;
    user.sendFeedback = req.body.sendFeedback;
    user.save((err, doc) => {
        if (!err)
            res.redirect('/home');
    })
}