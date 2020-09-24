const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const detail = mongoose.model('detail');

exports.InserData = function(req, res) {
    User.findById(req.params.id)
    .then(() => {
        detail.find({_id: req.params.id})
        .then(detail =>{
        res.render('./patient/hospital-information', {detail :detail, userId: req.session.userId})
    })
})
    .catch(err => {
        console.log('Error: ', err);
        throw err;
    })
};