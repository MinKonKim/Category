const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = process.env.port || 4000;

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "board",
  password: "1234",
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extends: true }));
// 요청 헤더
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Request-With, Content-Type Accept"
  );
  next();
});
// 전체 조회 요청
app.get("/help-list", (req, res) => {
  const sql = "SELECT * FROM help_table";
  db.query(sql, (err, result) => {
    res.send(result);
  });
});
// 삽입 요청
app.post("/help-insert", (req, res) => {
  const data = req.body;
  data.forEach((row) => {
    const {
      help_code,
      help_cate,
      help_up_code,
      help_level,
      level_sort,
      help_contents,
      help_subject,
      fild_group_uuid,
      read_count,
      insert_datatime,
      update_datatime,
    } = row;
    const sql =
      "INSERT INTO help_table (help_code,help_cate,help_up_code,help_level,level_sort,help_contents, help_subject,fild_group_uuid,read_count, insert_datatime,update_datatime) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

    db.query(
      sql,
      [
        help_code,
        help_cate,
        help_up_code,
        help_level,
        level_sort,
        help_contents,
        help_subject,
        fild_group_uuid,
        read_count,
        insert_datatime,
        update_datatime,
      ],
      (err, result) => {
        res.send(result);
      }
    );
  });

  res.send({ message: "Data saved successfully!!" });
});
// 상세 요청
app.post("/help-detail", (req, res) => {
  const id = req.body.help_code;

  const sql = "SELECT * FROM help_table WHERE help_code=? ";
  db.query(sql, [id], (err, result) => {
    res.send(result);
  });
});
// 수정 요청
app.post("/help-update", (req, res) => {
  const id = req.body.help_code;
  const sql = "UPDATE help_table SET";
});
// 삭제요청
// app.post("/help-delete",(req,res)=>{
//   const id =req.body;
// })

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
