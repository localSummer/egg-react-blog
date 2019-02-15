'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const apiV2Router = app.router.namespace('/api/v2');

  // 页面测试使用
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/news/:id', controller.news.item);

  // api v2 接口测试
  apiV2Router.get('/test', controller.api.index);

  // login
  apiV2Router.post('/login/register', controller.login.register); // 注册
  apiV2Router.post('/login', controller.login.loginIn); // 登录
  apiV2Router.get('/login/signout', controller.login.signOut); // 退出登录

  // user
  apiV2Router.get('/user/info', controller.user.userInfo); // 获取登录用户信息

  // topic
  apiV2Router.post('/topic/add', controller.topic.addTopic); // 添加贴子
  apiV2Router.get('/topic/detail', controller.topic.topicDetail); // 获取贴子详情
  apiV2Router.post('/topic/discuss/add', controller.topic.addDiscuss); // 新增评论
  apiV2Router.post('/topic/like', controller.topic.putLikeTopic); // 点赞
  apiV2Router.get('/topic/friend/list', controller.topic.friendsTopicList); // 获取当前用户关注的用户的贴子详情

  // follow
  apiV2Router.post('/friend/follow', controller.friend.follow); // 关注用户
  apiV2Router.get('/friend/unFollowUserlist', controller.friend.notFollowList); // 获取未关注用户列表
};
