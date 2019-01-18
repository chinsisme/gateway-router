const express = require("express");
const router = express.Router();
const compile = require("string-template/compile");
const request = require("request");

const Resp = require("./../constants/response");
const Routes = require("./../constants/routes");

router.get(
  "/:api_name/:level_id/:level/:resource/:action",
  (request_1, response_1) => {
    const send_to_authorization = {
      method: "POST",
      url:
        Routes.routes["AUTHORIZATION"] +
        "/" +
        request_1.params.level_id +
        "/" +
        request_1.params.level +
        "/" +
        request_1.params.resource +
        "/" +
        request_1.params.action,
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": request_1.header("x-auth-token")
      },
      body: request_1.body,
      json: true
    };
    // Send request to authorization API
    request(send_to_authorization, (error_2, response_2, body_2) => {
      if (error_2) {
        response_1.send({
          ERROR: error_2
        });
      } else {
        if (!response_2.body.hasOwnProperty("AUTHORIZATION_TOKEN")) {
          response_1.send(response_2.body);
        } else {
          //   Send request to appropriate API with authorization
          const send_to_api = {
            method: "POST",
            url: Routes.routes[request_1.params.api_name.toUpperCase()],
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": response_2.body["AUTHORIZATION_TOKEN"]
            },
            body: request_1.body,
            json: true
          };
          // Send request to appropriate API
          request(send_to_api, (error_3, response_3, body_3) => {
            if (error_3) {
              response_1.send("Could not connect to API.");
            } else {
              response_1.send(response_3.body);
            }
          });
        }
      }
    });
  }
);

module.exports = router;
