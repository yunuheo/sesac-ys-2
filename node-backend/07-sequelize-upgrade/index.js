const express = require('express');
const app = express();


const router = require('./routes');
app.use('/', router);


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

});
