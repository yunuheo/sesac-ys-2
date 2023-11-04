const express = require('express');
const app = express();
<<<<<<< HEAD
const PORT = 8050;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
=======
const port = 8000;
// const { sequelize } = require('./model');

app.set('view engine', 'ejs');
// app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
>>>>>>> ffa03025d39080c633cc03e86cf5cb5b0c1f0643

const router = require('./routes');
app.use('/', router);

<<<<<<< HEAD
app.get('*', function (req, res) {
  res.render('404');
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
=======
app.get('*', (req, res) => {
  res.send('접근할 수 없는 주소입니다.');
});

// sequelize
//   // force: true; 서버 실행마다 테이블 재생성
//   // force: false; 서버 실행시 테이블 없으면 생성
//   .sync({ force: false })
//   .then(() => {
//     app.listen(port, (err) => {
//       if (err) return console.log(err);
//       console.log(`서버가 실행되었습니다! http://localhost:${port}`);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

app.listen(port, () => {
  console.log('Server Port : http://localhost:8000 ', port);
>>>>>>> ffa03025d39080c633cc03e86cf5cb5b0c1f0643
});
