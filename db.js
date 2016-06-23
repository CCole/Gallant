var sql = require("mssql");
var msnodesqlv8 = require("msnodesqlv8");
//move details to config file or env variable
var dbConfig = {
    driver: "msnodesqlv8",
    server: "BEAST\\SQLEXPRESS",
    database: "SQUIRE_NP",
    user: "",
    PWD: "",
    port: "",
    options: {
        trustedConnection: "True"
    }
}

//instatiate a connection object (make connection in application entry point)
  var conn = new sql.Connection(dbConfig);

 //instantiate a request object used to make request to the server 
  var req = new sql.Request(conn); 

exports.getDB = function(){
    conn.connect(function(err){
      if(err){
          console.log(err);
          return;
      }
      
      console.log('connected to Db Server');
    });
}