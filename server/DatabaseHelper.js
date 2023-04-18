
let mysql = require('mysql2');
let config = require('./config.js');

module.exports.addUser = ({email, password, secQuest}, cb) => {
  const cn = mysql.createConnection(config);

  let procedure = `CALL addUser(?, ?, ?)`;
  //console.log(email);


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

module.exports.addBall = ({userId, manufacturer, year, ballName, ballColor, ballWeight, coreName, coreType,
  coreRG, coreDifferential, coreIDiff, coverName, coverFinish, horizDistToPin, vertDistToPin, horizDistToCG, vertDistToCG,
  horizDistToMB, vertDistToMB}, cb) => {
  const cn = mysql.createConnection(config);

   let procedure = `CALL addBall(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  //opens cn
  cn.query(procedure, [userId, manufacturer, year, ballName, ballColor, ballWeight, coreName, coreType,
    coreRG, coreDifferential, coreIDiff, coverName, coverFinish, horizDistToPin, vertDistToPin, horizDistToCG, vertDistToCG,
    horizDistToMB, vertDistToMB], cb);

  cn.end();
}

module.exports.getUserBalls = ({userId}, cb) => {
  let procedure = `CALL getUserBalls(?)`;
  const cn = mysql.createConnection(config);

  cn.query(procedure, [userId], cb);

  cn.end;
}

module.exports.deleteBall = ({ballId}, cb) => {
  let procedure = `CALL deleteBall(?)`;
  const cn = mysql.createConnection(config);

  cn.query(procedure, [ballId], cb);

  cn.end;
}

module.exports.editBall = ({ballId, manufacturer, year, ballName, ballColor, ballWeight, coreName, coreType,
  coreRG, coreDifferential, coreIDiff, coverName, coverFinish, horizDistToPin, vertDistToPin, horizDistToCG, vertDistToCG,
  horizDistToMB, vertDistToMB}, cb) => {
  const cn = mysql.createConnection(config);

   let procedure = `CALL editBall(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  //opens cn
  cn.query(procedure, [ballId, manufacturer, year, ballName, ballColor, ballWeight, coreName, coreType,
    coreRG, coreDifferential, coreIDiff, coverName, coverFinish, horizDistToPin, vertDistToPin, horizDistToCG, vertDistToCG,
    horizDistToMB, vertDistToMB], cb);

  cn.end();
}