const express = require('express');
const router = express.Router();
const watching_list = require('../controllers/watchingListController');
// const auth = require('../middlewares/auth');
// var Detail = require('../models/watchlist.model');

router.get('/', (req, res) => {
    watching_list.watchList(req, res)
    // res.send("donganh")
})
//     Detail.find({})
//     .then(Details => {
//         res.render('./patient/watching-list', { Details : Details})
//     })
//     .catch(err => {
//         console.log('Error: ', err);
//         throw err;
//     })
//  }); 


module.exports = router;