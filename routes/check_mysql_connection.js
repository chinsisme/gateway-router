const express = require("express");
const router = express.Router();

const Connection = require("./../connections/mysql");

// const Resp = require("./../constants/response");

router.use(express.json());

router.get("/", (req, res) => {
  //Check if connection exists
  if (Connection.status() == "authenticated") {
    res
      .send({
        MESSAGE: process.env.MESSAGE_DB_CONNECTION_SUCCESS,
        STATUS_CODE: process.env.STATUS_CODE_DB_CONNECTION_SUCCESS
      })
      .status(Number(process.env.STATUS_CODE_DB_CONNECTION_SUCCESS));
  } else {
    res
      .send({
        MESSAGE: process.env.MESSAGE_DB_CONNECTION_FAILURE,
        STATUS_CODE: process.env.STATUS_CODE_DB_CONNECTION_FAILURE
      })
      .status(Number(process.env.STATUS_CODE_DB_CONNECTION_FAILURE));
  }
});

module.exports = router;
