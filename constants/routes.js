// require("dotenv").config();

class Routes {
  constructor() {
    this.routes = {
      ROUTER: process.env.ROUTER,
      AUTHORIZATION: process.env.AUTHORIZATION,
      USER_MANAGEMENT: process.env.USER_MANAGEMENT
    };
  }
}

module.exports = new Routes();
