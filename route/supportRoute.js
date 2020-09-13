const express = require('express');
const router = express.Router();
var whereto_controller = require('../controllers/whereToController');

router.get('/sign', (req, res) => {
    res.render('./patient/sign');
});
router.get('/register-a-support', (req, res) => {
    res.render('./patient/register-a-support');
});
router.get('/where-to', (req, res) => {
    res.render('./patient/where-to');
});
router.get('/chat-with-consultants', (req, res) => {
    res.render('./patient/chat-with-consultants');
});

router.post('/where-to', function(req, res, next) {
    res.whereto_controller.whereto(req, res, next);
})


module.exports = router;