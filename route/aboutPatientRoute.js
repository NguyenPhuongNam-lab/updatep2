const express = require('express');
const router = express.Router();
const about_controller = require('../controllers/feedbackController')

router.get('/', (req, res) => {
    res.render('./patient/about');
});

router.get('/our-policy', (req, res) => {
    res.render('./patient/about');
});

router.get('/your-benefits', (req, res) => {
    res.render('./patient/about');
});

router.get('/how-to-use-this-portal', (req, res) => {
    res.render('./patient/about');
});

router.get('/feedback', (req, res) => {
    res.render('./patient/feedback');
});

router.post('/feedback', (req, res) => {
    about_controller.feedback(req, res, next);
});

module.exports = router;