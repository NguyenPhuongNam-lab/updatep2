const express = require('express');
const mongoose = require('mongoose');
const Detail = mongoose.model('detail');
const User = mongoose.model('User');

exports.watchList = function(req, res) {
    User.findById(req.params.id)
    .then(() => {
        Detail.find({})
        .then(Details =>{
            res.render('./patient/watching-list', {Details : Details,  userId : req.session.userId})
        })
        // console.log(doc)
        // res.render('./patient/test', {user:doc})
        // res.redirect('/')
    })
    .catch(err => {
        console.log('Error: ', err);
        throw err;
    })
};