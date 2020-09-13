const express = require('express');
const router = express.Router();
var newschedule = require('../controllers/scheduleManagemenController');

router.get('/', (req, res) => {
    res.render('./patient/schedule-management', { title: 'Schedule management', layout: false });
});

router.post('/', (req, res, next) => {
    newschedule.Scheduleadd(req, res, next);
})

module.exports = router;