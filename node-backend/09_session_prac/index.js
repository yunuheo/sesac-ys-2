const { render } = require('ejs');
const express = require('express');
const app = express();
const port = 8010;
const session = require('express-session');
app.set('view engine', 'ejs');
app.use(
  session({
    secret: 'secret key',
    resave: false, // 모든 요청마다 session을 다시 저장할 거냐?
    saveUninitialized: true, // 클라이언트가 처음 접속할 때, 세션을 한 번 초기화 할 건지 말건지
    cookie: {
      httpOnly: true, // document.cookie로는 접속 X
      maxAge: 30000,
    },
    // secure: true // https 에서만 동작하도록 함
  })
);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/get', (req, res) => {
  res.render('index', { user: req.session.user });
  console.log('1 : ', req.session);
  req.session.user = 'lily';
  console.log('2 : ', req.session);
});

app.listen(port, () => {
  console.log('Server Port : ', port);
});
