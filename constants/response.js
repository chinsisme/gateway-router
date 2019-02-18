class response {
  constructor() {
    this.message = {
      SERVER_CONNECTION_SUCCESS: "The server looks fine.",
      DB_CONNECTION_SUCCESS: "Connected to database.",
      DB_CONNECTION_FAILURE: "Not connected to database.",
      DB_CONNECTION_ATTEMPTED: "Connection to the database attempted.",
      DB_CONNECTED_ALREADY: "Already connected to the database.",
      DB_QUERY_FAILURE: "Query failed.",
      AUTHENTICATION_TOKEN_MISSING: "Did not provide authentication token.",
      AUTHENTICATION_TOKEN_INVALID: "Invalid authentication token. ",
      AUTHORIZATION_REQUEST_ERROR:
        "Incorrect authorization request syntax. Please check your request.",
      AUTHORIZATION_REQUEST_SUCCESS: "Authorization successful.",
      AUTHORIZATION_REQUEST_UNAUTHORIZED: "Unauthorized access!",
      USER_ID_INCORRECT: "Incorrect user authentication.",
      NPM_JWT_ERROR: "Error in decoding/encoding token."
    };
    this.status_code = {
      SERVER_CONNECTION_SUCCESS: "10000",
      DB_CONNECTION_SUCCESS: "10002",
      DB_CONNECTION_FAILURE: "10003",
      DB_CONNECTION_ATTEMPTED: "11034",
      DB_CONNECTED_ALREADY: "12245",
      DB_QUERY_FAILURE: "10013",
      AUTHENTICATION_TOKEN_MISSING: "10015",
      AUTHENTICATION_TOKEN_INVALID: "10025",
      AUTHORIZATION_REQUEST_ERROR: "10027",
      AUTHORIZATION_REQUEST_SUCCESS: "10026",
      AUTHORIZATION_REQUEST_UNAUTHORIZED: "10027",
      USER_ID_INCORRECT: "10035",
      NPM_JWT_ERROR: "10036"
    };
  }
}

module.exports = new response();
