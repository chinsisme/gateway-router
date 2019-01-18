const express = require("express");
const app = express();

const Connection = require("./connections/mysql");

const Resp = require("./constants/response");

const check_mysql_connection = require("./routes/check_mysql_connection");
const routes = require("./routes/route");

const port = process.env.port || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,x-auth-token"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.use(express.json());

app.listen(port, () => {
  console.log("Listening on port " + port);
});

Connection.connect();

app.use("/api/check_db_connection", check_mysql_connection);
app.use("/api/", routes);

// Test server connection

app.get("/", (req, res) => {
  res
    .send({
      MESSAGE: Resp.message.SERVER_CONNECTION_SUCCESS,
      STATUS_CODE: Resp.status_code.SERVER_CONNECTION_SUCCESS
    })
    .status(Resp.status_code.SERVER_CONNECTION_SUCCESS);
});
