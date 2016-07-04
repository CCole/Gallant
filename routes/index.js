var express = require('express');
var router = express.Router();
/*var db = require('../db');
var request = db.request(); 
var conn = db.conn();*/

 
/* GET home page. */



router.get('/', function(req, res, next) { 
    
    res.render('index', { title: 'Gallant Test' });
    //next(); 
});

module.exports = router;
