var mysql = require('mysql');
var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'xxx',
	database:'nodejs',
	port: 3306
});
pool.on('connection', function(connection) {  
connection.query('SET SESSION auto_increment_increment=1'); 
});

// use directly
pool.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

// share
pool.getConnection(function(err, connection) {
	
	connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
		  if (err) throw err;
		  console.log('The solution is: ', rows[0].solution);
	})


});