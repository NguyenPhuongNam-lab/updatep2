const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const createhospital = mongoose.model('Hospital');

const storageEngine = multer.diskStorage({
    destination: './public/upload/hospital',
    filename: function(req, file, fn) {
        fn(null, new Date().getTime().toString() + '-' + file.fieldname + path.extname(file.originalname));
    }
});
const uploadImage = multer({
    storage: storageEngine,
    limits: {
        fileSize: 20000000
    },
    fileFilter: function(req, file, callback) {
        validateFile(file, callback);
    }
}).single('imageHospital');
var validateFile = function(file, cb) {
    allowedFileTypes = /jpeg|jpg|png|gif/;
    const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedFileTypes.test(file.mimetype);
    if (extension && mimeType) {
        return cb(null, true);
    } else {
        cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
    }
};

exports.creatnew = function(req, res) {
    console.log(req.body);
    var newhospital = new createhospital();
    uploadImage(req, res, (error) => {
        if (error) {
            console.log("Error 1");
        } else {
            newhospital.hospitalName = req.body.hospitalName;
            newhospital.address = req.body.address;
            newhospital.phoneNumber = req.body.phoneNumber;
            newhospital.subsidiaries = req.body.subsidiaries;
            newhospital.description = req.body.description;
            if (req.file == undefined) {
                newhospital.imageHospital = null;
            } else {
                var fullPath = "hospital/" + req.file.filename;
                newhospital.imageHospital = fullPath;
            }
            // console.log('ok');
        };
        console.log(newhospital);
        newhospital.save((err, doc) => {
            if (!err) {
                res.redirect('/list-hospital');
                // console.log('ok2');
            } else {
                if (err.name == 'ValidationError') {
                    handleValidationError(err, req.body);
                    res.render("admin/Create-Hospital", {
                        viewTitle: 'Create Hospital',
                        newhospital: req.body,
                        layout: false,
                    });
                } else {
                    console.log('Error during record insertion : ' + err);
                }
            }
        })
    });

    function handleValidationError(err, body) {
        for (field in err.errors) {
            switch (err.errors[field].path) {
                case 'hospitalName':
                    body['hospitalNameError'] = err.errors[field].message;
                    break;
                case 'address':
                    body['addressError'] = err.errors[field].message;
                    break;
                case 'phoneNumber':
                    body['phoneNumberError'] = err.errors[field].message;
                    break;
                default:
                    break;
            };
        };
    };
}