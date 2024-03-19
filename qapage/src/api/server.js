const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const db = require("./config/db.js");

app.get("/", (req, res) => {
  console.log("/root");
});
app.get("/admin", (req, res) => {
  console.log("/admin");
});
app.get("/qapage", (req, res) => {
  console.log("/QApage");
  db.query("select * from qatable", (err, data) => {
    if (!err) {
      res.send(data);
      //response , send
      //응답을 클라이언트 쪽으로 보낸다.
    }
  });
});
app.get("/qapage/:id", (req, res) => {
  console.log("/QApage/:id");
  const id = req.params.id;
  db.query(`select * from qatable where id in ${id}`, (err, data) => {
    if (!err) {
      res.send(data);
      //response , send
      //응답을 클라이언트 쪽으로 보낸다.
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}`);
});
