'use strict';

const jwt = require('jsonwebtoken');

module.exports = {
  get jwt() {
    return jwt;
  },
  // 获取登录用户信息
  get user() {
    const token = this.cookies.get(this.app.config.auth_cookie_name);
    const user = jwt.verify(token, this.app.config.jwt_secret);
    return user; // user为包含userId的json对象
  },
  returnBody(status, message, data = null) {
    this.status = status;
    this.body = {
      message,
      data,
      flag: true,
    };
  },
  returnFalseBody(status, message, data = null) {
    this.status = status;
    this.body = {
      message,
      data,
      flag: false,
    };
  },
};

