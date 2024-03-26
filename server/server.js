const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const conn = require("./config/mysql.js");
const app = express();

//json 데이터 받기 위함.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// 포트 설정
app.set("port", process.env.PORT || 4000);
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: "3306",
  database: "board",
});
// 데이터베이스에 연결시도
db.connect((err) => {
  if (err) {
    console.log("데이터베이스 연결 실패" + err.stack);
    return;
  }

  console.log("데이터베이스에 성공적으로 연결됨. 연결ID : " + db.threadId);
});

// 전체 조회 요청
app.get("/view", (req, res) => {
  var sql = "SELECT*FROM help_table";
  conn.query(sql, function (err, result) {
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
app.post("/help-insert", async (req, res) => {
  try {
    const { help_code, help_up_code, help_content } = req.body;
    const sql = `INSERT INTO help_table (help_code,help_up_code,help_level,level_sort,help_content,read_count, insert_datetime) VALUES (?,?,IFNULL((SELECT h.help_level FROM help_table h WHERE h.help_code = ?), 0) + 1, IFNULL((SELECT COUNT(*) FROM help_table h WHERE h.help_up_code = ?), 0) + 1,?,0,NOW())`;

    // 쿼리 실행
    const [result] = await conn.execute(sql, [
      help_code,
      help_up_code,
      help_up_code,
      help_up_code,
      help_content,
    ]);

    res.json({
      success: true,
      message: "성공적으로 추가되었습니다.",
      insertId: result.insertId,
    });
  } catch (error) {
    console.log("Insert error", err);
    res
      .status(500)
      .json({ success: false, message: "서버 오류가 발생했습니다." });
  }
});

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

app.listen(app.get("port"), () => {
  console.log(`running on port : ${app.get("port")} `);
});
