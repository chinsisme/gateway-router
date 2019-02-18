const express = require("express");
const router = express.Router();

const Connection = require("./../connections/mysql");

const Resp = require("./../constants/response");

router.use(express.json());

router.get("/", (req, res) => {
    //Check if connection exists
    if (Connection.status() != "authenticated") {
        Connection.connect();
        res
            .send({
                MESSAGE: Resp.message.DB_CONNECTION_ATTEMPTED,
                STATUS_CODE: Resp.status_code.DB_CONNECTION_ATTEMPTED
            })
            .status(Number(Resp.status_code.DB_CONNECTION_ATTEMPTED));
    } else {
        res
            .send({
                MESSAGE: Resp.message.DB_CONNECTED_ALREADY,
                STATUS_CODE: Resp.status_code.DB_CONNECTED_ALREADY
            })
            .status(Number(Resp.status_code.DB_CONNECTED_ALREADY));
    }
});

module.exports = router;
