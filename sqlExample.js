let mysql = require('mysql2');
let config = require('./config.js');

let connection = mysql.createConnection(config);

let procedure = 'CALL addUser(?, ?)';
let name = "bob hoskins";
let password = "abc123"


connection.query(procedure, [name, password], function (err, result) {
  if (err) {
    return console.error(err.message);
  }
  console.log("User added");
});

connection.query('Call addBall(?, ?, ?, ?)', [1, "blue", 5, "Shiny"], function (err, result) {
    if (err) {
      return console.error(err.message);
    }
    console.log("Ball added")
  });
  connection.end();