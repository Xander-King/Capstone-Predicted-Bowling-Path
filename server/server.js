const express = require('express');
const helper = require("./DatabaseHelper");
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get("/health", (req, res) => {
    res.json({message:"ok"});
});

app.get("/users", (req, res) => {
  helper.listUsers((err, r) => {
    if (err) {
        console.error(err);
        res.sendStatus(500);
    } else {
        res.json(r);
    }
  });
});

app.post("/users", (req, res) => {
    console.log(req.body);
    helper.addUser(req.body, (err, r) => {

        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            res.json(r);
        }
      });
});

app.post("/login", (req, res) => {
    console.log(req.body);
    helper.login(req.body, (err, r) => {

        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log(r);
            if(r[0].length == 0) {
                res.sendStatus(403);
            } else {
                res.json(r[0]);
            }
            

        }
      });
});

app.post("/makeAccount", (req, res) => {
    console.log(req.body);
    helper.addUser(req.body, (err, r) => {

        if (err) {
            console.error(err.message);
            if (err.message.includes("Duplicate")) {
                res.sendStatus(429);
            } else {
                res.sendStatus(500);
            }
        } else {
            console.log(r);
            if(r.affectedRows == 1) {
                res.json({message:"Account Created"});
            } else {
            res.json(r);
            }
        }
    })


});

app.post("/getPassword", (req, res) => {
    console.log(req.body);
    helper.getPassword(req.body, (err, r) => {
        
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log(r);
            if(r[0].length == 0) {
                res.sendStatus(404);
            } else {
            res.json(r[0][0]);
            }
        }
    })
});

app.post("/addBall", (req, res) => {
    console.log(req.body);
    helper.addBall(req.body, (err, r) => {
        
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log(r);
            res.json({status:'added'})
        }
    })
});

app.post("/deleteBall", (req, res) => {
    console.log(req.body);
    helper.deleteBall(req.body, (err, r) => {
        
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log(r);
            res.json({status:`${req.body.ballId} deleted`})
            
        }
    })
});

app.post("/editBall", (req, res) => {
    console.log(req.body);
    helper.editBall(req.body, (err, r) => {
        
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log(r);
            if(r[0].length == 0) {
                res.sendStatus(404);
            } else {
            res.json(r[0][0]);
            }
        }
    })
});

app.post("/getUserBalls", (req, res) => {
    console.log(req.body);
    helper.getUserBalls(req.body, (err, r) => {
        
        if (err) {
            console.error(err);
            res.sendStatus(500);
        } else {
            console.log(r);
            res.json(r[0])
        }
    })
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

