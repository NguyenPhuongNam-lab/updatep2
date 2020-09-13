const express = require('express');
const router = express.Router();
const profile = require('../controllers/profileController');

router.get('/:id', (req,res) =>{
    profile.InserData(req, res)
})

// router.get('/:id', (req,res) =>{
//     profile.EditData(req, res)
// })

router.post('/:id', (req, res)=>{
    profile.UpdateData(req, res)
})


module.exports = router;