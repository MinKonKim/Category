const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");
const bodyPaser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyPaser.urlencoded({ extended: false }));
app.use(bodyPaser.json());
//json 데이터 받기 위함.

// 포트 설정
app.set("port", process.env.PORT || 4000);
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: "3306",
  database: "board",
});
// 데이터베이스에 연결확인
db.connect((err) => {
  if (err) {
    console.log("데이터베이스 연결 실패" + err.stack);
    return;
  }

  console.log("데이터베이스에 성공적으로 연결됨. 연결ID : " + db.threadId);
});

app.get("/", (req, res) => {
  return res.json("From Backend Side");
});

// 전체 조회 요청
app.get("/view", (req, res) => {
  var sql = "SELECT*FROM help_table";
  db.query(sql, function (err, result) {
    if (err) console.log("query가 실행되지 않았습니다." + err);
    else res.send(result); // 결과 반환
  });
});

// 단일 조회 요청
app.get("/view/:id", (req, res, next) => {
  conn.query("SELECT * from help_table", (err, rows) => {
    if (err) throw err;
    const article = rows.find((art) => art.idx === parseInt(req.params.id));
    if (!article) {
      return res.status(404).send("ID was not found");
    }
    res.send(article);
  });
});

// 삽입 요청
app.post("/help-insert", (req, res) => {
  const body = req.body;
  console.log(body);
  let help_code = body.help_code;
  let help_up_code = body.help_up_code;
  let help_content = body.help_content;
  let link_address = body.link_address;
  let help_subject = body.help_subject;
  let values = [
    help_code,
    help_subject,
    link_address,
    help_up_code,
    help_up_code,
    help_content,
  ];
  console.log("Values : " + values);

  const sql = `INSERT INTO help_table (help_code,help_subject,link_address,help_up_code,help_level,level_sort,help_content,read_count, insert_datetime)
   VALUES (?,?,?,NULL,
    IFNULL((SELECT h.help_level FROM help_table h WHERE h.help_code = ?), 0) + 1,
    IFNULL((SELECT COUNT(*) FROM help_table h WHERE h.help_up_code = ?), 0) + 1,?,0,NOW())`;
  // 쿼리 실행
  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server Error");
    } else {
      res.status(201).send("Successfully Add");
    }
  });
});

//#region 아직 미개발
// 수정 요청
app.post("/help-update", (req, res) => {
  const id = req.body.help_code;
  const sql =
    "UPDATE help_table SET help_code=?, help_cate=?,help_up_code=?,help_level=?, level_sort=?,help_contents=?,help_subject=?,fild_group_uuid=?,read_count=?,update_datatime=?  WHERE help_code = id";
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
      update_datatime,
    ],
    (err, result) => {
      res.send(result);
    }
  );
});
// 삭제요청
// app.post("/help-delete",(req,res)=>{
//   const id =req.body;
// })
//#endregion

//서버 시작
app.listen(app.get("port"), () => {
  console.log(`running on port : ${app.get("port")} `);
});
