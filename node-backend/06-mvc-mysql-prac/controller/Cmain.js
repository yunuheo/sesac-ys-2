const User = require('../model/Login');

exports.main = (req, res) => {
  res.render('index');
};

// exports.visitor = (req, res) => {
//   //   const data = Visitor.getVisitors();
//   //   res.render('visitor', { data: data });
//   Visitor.getVisitors((rows) => {
//     res.send({ data: rows });
//   });
// };

exports.login = (req, res) => {
  console.log('아이디:', req.body.id, '비밀번호:', req.body.pw);

  const userData = User.getUser(req.body.id, req.body.pw);

  let data;
  if (userData) {
    data = {
      isSuccess: true,
      msg: `${req.body.name}님 환영합니다!`,
    };
  } else {
    data = {
      isSuccess: false,
      msg: '아이디 또는 비밀번호를 잘못 입력했습니다.',
    };
  }

  res.send(data);
};
