const express = require("express");
const router = express.Router();
const connection = require("../database");

router.post("/createuser", async (req, res) => {
  let id=2;
  const { rname, rpass, name } = req.body;
  let createUserQuery = `insert into users (userId, username, password, name) values("${id}", "${rname}", "${rpass}", "${name}")`;

  connection.query(createUserQuery, function (err, result) {
    if (err) console.log(err.message);
    console.log("1 record inserted");
    console.log(result);
    id++;
    return res.status(201).json({ result });
  });
});

router.post("/readUser", async (req, res) => {
  const {uname} =req.body;
  console.log(uname);
  console.log("hello");
  let testQuery=`select * from users where userName="${uname}"`;
  connection.query(testQuery, function (err, result) {
    if (err) console.log(err.message);
    console.log("1 record read");
    console.log(result);
    return res.status(201).json({ result });
  });
});

router.post("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  let deleteUserQuery;

  if (!userid) {
    console.log("userid empty");
  } else {
    deleteUserQuery = `delete from users where userid=${userid}`;
  }
  console.log(userid);

  connection.query(deleteUserQuery, function (err, result) {
    if (err) console.log(err.message);
    console.log("1 record inserted");
    console.log(result);
    return res.status(201).json({ result });
  });
});

router.post("/modifyUser", async (req, res) => {
  const { userId, uname, password, name } = req.body;
  let modifyUserQuery;
  if (!name) {
    console.log("name empty");
  } else {
    modifyUserQuery = `update users set name="${name}" where userid=${userId}`;
  }
  if (!uname) {
    console.log("username empty");
  } else {
    modifyUserQuery = `update users set username="${uname}" where userid=${userId}`;
  }
  if (!password) {
    console.log("password empty");
  } else {
    modifyUserQuery = `update users set password="${password}" where userid=${userId}`;
  }

  //   let modifyUserQuery =`update users set userid=${userid}, username=${username}, password=${password}, name=${name} where id=`

  connection.query(modifyUserQuery, function (err, result) {
    if (err) console.log(err.message);
    console.log("1 record inserted");
    console.log(result);
    return res.status(201).json({ result });
  });
});

module.exports = router;
