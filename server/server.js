const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 4000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "board",
});

app.post("/add_help", (req, res) => {
  sql =
    "INSERT INTO help_table (`help_code`,`help_cate`,`help_contents`,`help_subject`) VALUES(?) ";
  const values = [
    req.body.help_code,
    req.body.help_cate,
    req.body.help_contents,
    req.body.help_subject,
  ];
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "예상치 못한 일이 발생했습니다." + err });
    return res.json({ success: "help_table에 추가 완료!" });
  });
});

app.listen(port, () => {
  console.log("listening");
});
