const express = require('express');
const multer = require('multer'); // multer 불러오기
const path = require('path');
// path: 파일 경로를 받았을 때, 그 조작을 도와준다.
// ex) 확장자 추출. 파일이름을 추출

const app = express();
const PORT = 8010;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 클라이언트가 uploads 폴더에 저장한 이미지파일에 접근할 수 있도록, 미들웨어 작성
app.use('/uploads', express.static(__dirname + '/uploads'));

const upload = multer({
  dest: 'uploads/',
});

// upload라는 객체 안에는 미들웨어 함수가 존재. single(), array()
// 미들웨어 : 요청과 응답 사이에 존재.
// multer가 임의의 문자열을 생성해서 그 문자열을 파일 이름으로 만듦.
// 심지어 확장자도 붙여주지 않음.

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, 'uploads/');
    },
    filename: function (req, file, done) {
      console.log(file); // file.originalname : 미니언.webp
      const ext = path.extname(file.originalname); // .webp
      const basename = path.basename(file.originalname, ext); // 미니언
      const fileName = basename + '_' + Date.now() + ext; // 미니언_123453156.webp

      done(null, fileName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
});
// uploadss/미니언_123453156.webp

// storage : 파일을 저장할 정보
// -- diskStorage : 파일을 디스크에 저장하기 위한 기능을 제공하는 메소드
// ----- destination : 파일이 저장될 경로
// ----- filename : 파일이 저장될 이름
// limits
// -- fileSize : 파일의 최대 크기

app.get('/', function (req, res) {
  res.render('index_prac');
});

app.post('/upload/detail', uploadDetail.single('userfile'), function (req, res) {
  console.log('프로필이미지:', req.file);
  console.log('회원정보:', req.body);

  res.render('result_prac', {
    src: req.file.path,
    // title: req.body.title,
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
  });
  // res.send("파일 업로드");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
