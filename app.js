
 var mysql = require('mysql');
 var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'xxx',
     database:'nodejs',
     port: 3306
 });

 
//创建一个connection
connection.connect(function(err){
    if(err){        
          console.log('[query] - :'+err);
        return;
    }
      console.log('[connection connect]  succeed!');
});  
//exe SQL
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) { 
     if (err) {
             console.log('[query] - :'+err);
        return;
     }
     console.log('The solution is: ', rows[0].solution);  
});  
//close connection
connection.end(function(err){
    if(err){        
        return;
    }
      console.log('[connection end] succeed!');
});