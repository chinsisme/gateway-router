const express = require("express");
const router = express.Router();

const Connection = require("./../connections/mysql");

// const Resp = require("./../constants/response");

router.use(express.json());

router.get("/", (req, res) => {
    //Check if connection exists
    if (Connection.status() != "authenticated") {
        Connection.connect();
        res
            .send({
                MESSAGE: process.env.MESSAGE_DB_CONNECTION_ATTEMPTED,
                STATUS_CODE: process.env.STATUS_CODE_DB_CONNECTION_ATTEMPTED
            })
            .status(Number(process.env.STATUS_CODE_DB_CONNECTION_ATTEMPTED));
    } else {
        res
            .send({
                MESSAGE: process.env.MESSAGE_DB_CONNECTED_ALREADY,
                STATUS_CODE: process.env.STATUS_CODE_DB_CONNECTED_ALREADY
            })
            .status(Number(process.env.STATUS_CODE_DB_CONNECTED_ALREADY));
    }
});

module.exports = router;
