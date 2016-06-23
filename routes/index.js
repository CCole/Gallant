var express = require('express');
var router = express.Router();
var db = require('../db');
var request = db.request(); 
var conn = db.conn(); 
/* GET home page. */

router.get('/', function(req, res, next) { 
  console.log(db.request);
  request.query("SELECT * FROM Staff", function (err, recordset){
          if(err){
              console.log(err);
          }
              else {
                  console.log(typeof recordset);
                  res.render('index', { title: JSON.stringify(recordset) });
              }
             conn.close();
      });
      
      
  
});

module.exports = router;
