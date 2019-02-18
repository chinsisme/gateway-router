const mysql = require("mysql");
// require("dotenv").config();

class MySQLConnection {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    });
    console.log({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    })
  }

  connect() {
    this.connection.connect(err => {
      if (err) {
        console.log("Connection error");
        console.log(err)
        return 0;
      } else {
        console.log("Connection success");
        return 1;
      }
    });
  }

  status() {
    return this.connection.state;
  }
}

module.exports = new MySQLConnection();
