import { LoginScreen } from "./LoginScreen";


let config = require('./server/config.js');

let connection = mysql.createConnection(config);

let procedure = `CALL addUser(?, ?)`;
let name = LoginScreen.email;
let password = LoginScreen.password;

//opens connection
connection.query(procedure, [name, password], function (err, result) {
  if (err) {
    return console.error(err.message);
  }
  console.log("User added");
});

connection.end();