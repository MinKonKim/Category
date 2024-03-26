var mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: "3306",
  database: "board",
});

module.exports = {
  init: function () {
    return mysql.createConnection(db);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("mysql connection error: " + err);
      else console.log("mysql 연결 성공");
    });
  },
};
