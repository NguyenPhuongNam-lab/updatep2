const express = require('express');
const router = express.Router();
var create_hospital = require('../controllers/createhospitalController');

router.get('/', (req, res) => {
    res.render('./admin/Create-Hospital', { title: 'Create Hospital', layout: false });
});

router.post('/', (req, res) => {
    create_hospital.creatnew(req, res);
});


module.exports = router;