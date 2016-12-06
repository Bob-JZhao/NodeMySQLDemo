var mysql = require('mysql');
var db_config = {
host: 'localhost',
user: 'root',
password: 'xxx',
database:'nodejs',
port: 3306
};

var connection;
function handleDisconnect() {
  connection = mysql.createConnection(db_config);                                               
  connection.connect(function(err) {              
    if(err) {                                     
      console.log("reconnect" + new Date());
      setTimeout(handleDisconnect, 2000);   //
      return;
    }         
     console.log("connect successfully");  
  });                                                                           
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      throw err;                                 
    }
  });
}
handleDisconnect();