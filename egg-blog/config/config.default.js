'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545966125040_9743';

  // add your config here
  config.middleware = [
    'authorization',
  ];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.security = {
    csrf: false,
  };

  config.sequelize = {
    username: 'root',
    password: 'your password',
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'learn',
  };

  config.password_secret = 'test123test';

  config.jwt_secret = 'jwttestjwt';

  config.auth_cookie_name = 'jwt_token';

  config.cookie_domain = 'localhost';

  config.authWhiteList = [ '/api/v2/test', '/api/v2/login/register', '/api/v2/login' ];

  config.qiniu = {
    accessKey: 'your accessKey',
    secretKey: 'your secretKey',
    publicBucketDomain: 'http://pn49pgf9r.bkt.clouddn.com',
    options: {
      scope: 'instagram',
      expires: 7200,
    },
  };

  return config;
};
