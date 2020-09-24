const express = require('express');
const router = express.Router();
const hospital_information = require('../controllers/hospitalInformationController');
// var List = require('../models/watchlist.model');

router.get('/:iD', (req, res) => {
    hospital_information.LoadList(req, res)
})


router.post('/:iD', (req, res) => {
    hospital_information.InserList(req, res)
})


module.exports = router;