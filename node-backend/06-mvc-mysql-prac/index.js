const express = require('express');
const app = express();
const PORT = 8020;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require('./routes');

app.use('/', router);
app.use('/axios', router);

app.get('*', function (req, res) {
  res.send('페이지를 찾을 수 없습니다.');
});

app.listen(PORT, function () {
  console.log(`Server Open ${PORT}`);
});
