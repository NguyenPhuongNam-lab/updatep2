const express = require('express');
const router = express.Router();
const profile = require('../controllers/profileController');
const auth = require('../middlewares/auth');

router.get('/:id',auth, (req,res, next) =>{
    profile.InserData(req, res, next)
})

router.get('/edit/:id',auth, (req,res) =>{
    profile.EditData(req, res)
})

router.post('/edit/:id', (req, res)=>{
    profile.UpdateData(req, res)
})


module.exports = router;