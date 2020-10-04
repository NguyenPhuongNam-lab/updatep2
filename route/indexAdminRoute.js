const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/admin', (req, res) => {
    res.render('./admin/index');
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login', layout: false })
});

router.get('/register', (req, res) => {
    res.render('register', { title: 'Register', layout: false })
});

router.get('/forgot-password', (req, res) => {
    res.render('forgot-password', { title: 'Forgot password', layout: false })
});

router.get('/404', (req, res) => {
    res.render('./admin/404');
});

router.get('/blank', (req, res) => {
    res.render('./admin/blank');
});

router.get('/charts', (req, res) => {
    res.render('./admin/charts');
});

module.exports = router;