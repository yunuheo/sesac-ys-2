const { userInfos } = require('../model/Login');

exports.main = (req, res) => {
  res.render('index');
};

// axios 로직을 여기에 넣어야 하나?
exports.login = (req, res) => {
  const userData = userInfos();
  res.send(userData);
};
