const express = require('express');
const router = express.Router();
var medicalreport_controller = require('../controllers/medicalReportController');


router.get('/', (req, res, next) => {
    medicalreport_controller.loadMedical(req, res, next)
});
router.post('/', (req, res, next) => {
    medicalreport_controller.addmedical(req, res, next);
})

module.exports = router;