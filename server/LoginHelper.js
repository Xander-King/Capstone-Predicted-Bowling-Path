
let mysql = require('mysql2');
let config = require('./config.js');

module.exports.addUser = ({email, password, secQuest}, cb) => {
  const cn = mysql.createConnection(config);

  let procedure = `CALL addUser(?, ?, ?)`;
  console.log(email);


  //opens cn
  cn.query(procedure, [email, password, secQuest], cb);

cn.end();
}

 module.exports.login = ({email, password}, cb) => {
    const cn = mysql.createConnection(config);
    
    let procedure = `CALL loginUser(?, ?)`;
    
    
    
    //opens connection
    cn.query(procedure, [email, password], cb);
      
    
    
    cn.end();
    }

    module.exports.listUsers = (cb) => {
      const cn = mysql.createConnection(config);
      
      let procedure = `SELECT userID, userName FROM bowlingapp.users`;
      
      
      
      //opens cn
      cn.query(procedure, cb);
      
      cn.end();
      }

module.exports.getPassword = ({email, sQuest}, cb) => {
  const cn = mysql.createConnection(config);

   let procedure = `CALL getPassword(?, ?)`;
  //let procedure = `SELECT password FROM bowlingapp.users WHERE username = ? AND secQuest = ?`;

  //opens cn
  cn.query(procedure, [email, sQuest], cb);

  cn.end();
}