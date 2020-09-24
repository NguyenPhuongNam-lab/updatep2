const express = require('express');
const router = express.Router();
var newschedule = require('../controllers/scheduleManagemenController');

router.get('/', (req, res) => {
    newschedule.loadSchedule(req, res)
});

router.post('/', (req, res, next) => {
    newschedule.Scheduleadd(req, res, next);
})

module.exports = router;