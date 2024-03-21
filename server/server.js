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
  database: "help_table",
});

app.listen(port, () => {
  console.log("listening");
});
