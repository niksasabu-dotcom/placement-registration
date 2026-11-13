const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "displayplacement"
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Failed");
  } else {
    console.log("Database Connected");
  }
});

/* REGISTER JOB SEEKER */
app.post("/register", (req, res) => {
  const {
    f_name,
    l_name,
    p_no,
    email,
    qualification,
    skills,
    u_name,
    pwd
  } = req.body;

  const sql =
    "INSERT INTO job_seeker (f_name, l_name, p_no, email, qualification,skills, u_name, pwd) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [f_name, l_name, p_no, email, qualification, skills, u_name, pwd],
    (err) => {
      if (err) {
        console.log(err);
        res.send("Failed");
      } else {
        res.send("Job Seeker Registration Successful");
      }
    });
});
 
/* DISPLAY JOB SEEKERS */
app.get("/display", (req, res) => {
  const sql = "SELECT * FROM job_seeker";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Failed");
    } else {
      res.json(result);
    }
  });
});

app.listen(5000, () => {
  console.log("Server Running on port 5000");
});