const express = require('express');
const router = express.Router();
const consultant_infor = require('../controllers/consultantInformationController');
// var Listc = require('../models/listConsultant.model');

router.get('/:id', (req, res) =>{
    consultant_infor.LoadInfor(req, res)
})

router.post('/:id', (req,res) => {
    consultant_infor.InsertInfor(req, res)
})


module.exports = router;