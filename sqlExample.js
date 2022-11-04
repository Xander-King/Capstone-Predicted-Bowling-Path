let mysql = require('mysql2');
let config = require('./config.js');

let connection = mysql.createConnection(config);

let procedure = `CALL addUser(?, ?)`;
let name = "phil";
let password = "abc123"

// This is for adding a user
connection.query(procedure, [name, password], function (err, result) {
  if (err) {
    return console.error(err.message);
  }
  console.log("User added");
});


// This is for adding a ball 
connection.query('Call addBall(?, ?, ?, ?)', [1, value.name, value.weight, value.color], function (err, result) {
  if (err) {
    return console.error(err.message);
  }
  console.log("Ball added")
});
connection.end();