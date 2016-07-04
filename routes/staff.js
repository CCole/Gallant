var express = require('express');
var router = express.Router();
var db = require('../db');
var request = db.request(); 
var conn = db.conn();

 
/* GET staff records. */



router.get('/', function(req, res) {
        //console.log(db.request);
        console.log('in staff route handler');
        request.query("SELECT * FROM Staff", function (err, recordset){
          if(err){
              console.log(err); 
          }
              else {
                  console.log(recordset);
                 
                 res.json(recordset);
                 
              }
             //conn.close();
        });
});

module.exports = router;
