const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const User = mongoose.model('User');
const limitPage = 10;

exports.listUsers = function(req, res, next) {
        var page = 1;
        if (req.query.page) {
            page = req.query.page;
        }
        var condition = {};
        User.count(condition, function(err, count) {
            User.find(condition).skip(limitPage * (page - 1)).limit(limitPage).exec((err, docs) => {
                if (!err) {
                    console.log(docs)
                    res.render("users/index", {
                        title: 'User information',
                        userSlideBarActive: true,
                        userType: req.session.userType,
                        list: docs,
                        pagination: {
                            page: page,
                            limit: limitPage,
                            totalRows: count,
                            queryParams: ''
                        }
                    });
                    //             res.json(docs)
                } else {
                    console.log('Error in retrieving user list :' + err);
                }
            });
        });
    }
    //
    // exports.insertRecordUserFB = function(req, res, next) {
    //     uploadPhoto(req, res, (error) => {
    //         if (error) {
    //             console.log("Error 1");
    //         } else {
    //             var user = new User();
    //             user.resourceType = "users"
    //             user.name = req.body.name;
    //             user.email = req.body.email;
    //             user.password = 1111111111;
    //             user.username = "donganh";
    //             //             user.gender = req.body.gender;
    //             //             user.mobile = req.body.mobile;
    //             //             user.city = req.body.city;
    //             //             user.type = req.body.type;
    //             if (req.file == undefined) {
    //                 user.image = "account/donganh.png"
    //             } else {
    //                 var fullPath = "account/" + req.file.filename;
    //                 user.image = fullPath;
    //             }
    //             user.save(function(err, doc) {
    //                 if (!err) {
    //                     console.log(req.body)
    //                     return res.redirect('/users/list');
    //                 } else {
    //                     if (err.name == 'ValidationError') {
    //                         handleValidationError(err, req.body);
    //                         console.log(req.body);
    //                         return res.render("users/create_edit", {
    //                             viewTitle: 'Edit user',
    //                             user: req.body,
    //                             userType: req.session.userType,
    //                         });
    //                     } else {
    //                         console.log('Error during record insertion : ' + err);
    //                     }
    //                 }
    //             });
    //         }
    //     });
    // }

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'firstName':
                body['firstNameError'] = err.errors[field].message;
                break;
            case 'lastName':
                body['lastNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            case 'password':
                body['passwordError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}