require('../controllers/createhospitalController');
const express = require('express');
const mongoose = require('mongoose');
const List = mongoose.model('Hospital');

exports.LoadList = function(req, res) {
    List.findById(req.params.iD, (err, list) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('./admin/hospitalInformation', { list: list });
    })
};

exports.InserList = function(req, res) {
    let iD = req.params.iD;
    // var imageHospital = "/public/upload/hospital/" + req.file.filename + ".jpg";
    List.findByIdAndUpdate({ _id: iD }, {
            $set: {
                hospitalName: req.body.hospitalName,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                subsidiaries: req.body.subsidiaries,
                description: req.body.description,
                imageHospital: req.body.imageHospital
            }
        }, { useFindAndModify: false })
        .then(doc => {
            res.redirect('/list-hospital')
        })
}