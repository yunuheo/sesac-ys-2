const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// req.body를 해석하기 위한 코드
app.use(express.urlencoded({ extended: true }));
// x-www-form-urlencoded 형태의 데이터를 해석
// extended : true일 경우 qs 모듈(외부 모듈)을 이용한다. false일 경우 내장 모듈 모듈인 queryString 모듈을 사용한다.
// ~~~~~~?name=lily
app.use(express.json());
// appication/json 형태의 데이터를 해석


// localhost:8000 url 접속에 대한 응답을 위해 만든 코드!
app.get("/", function (req, res) {
    res.render("index");
});


// get 요청은 url로 접속이 가능하다.
// get 요청은 req.query에 데이터가 담겨서 온다.
// 데이터 전송 시에 form 태그를 이용할 경우, method를 get으로 해놓으면 get 요청
// 클라이언트가 get 요청으로 데이터를 보낼 때 url에 직접 query를 만들어서 전송이 가능하다.
// url에 전송되는 데이터가 노출된다. 즉, 개인정보를 위한 전송은 get으로 하지 않는다.
// 정보를 조회하는 요청에 사용함. (CRUD 중에서 Read를 의미하는 요청에 사용)
// localhost:8000/get
app.get("/get", function (req, res) {
    console.log(req.query) // {id: 'lily', pw: '1234'}
    console.log(req.query.id) // lily

    //req.query : get 요청에 대해 clinet가 보낸 데이터를 담고 있다.
    // url에서 기본주소(loaclhost:8000/get) 뒤에 오는 ?id=lily=&pw=1234 이런 주소를 의미.
    // 기본주소?id = lily&pw=1234
    res.send("get 요청 성공!")
})

// loaclhost:8000/post 의 post요청을 받기 위한 준비.
// post 요청은 url로 직접 요청하는 건 불가능함.
// post 요청에 대한 데이터는 req.body에 담아서 옴.
// 정보가 숨겨짐.( url에 노출되지 않음) 데이터를 새로 생성하는 요청에 주로 사용 (CRUD 중에서 Create를 의미하는 요청에 사용)
app.post("/post", function(req, res) {
    console.log(req.body);
    res.send("post 요청 성공!")
})

app.post("/post/ver2", function(req, res) {
    console.log(req.body);
    res.render("result", {
        name: req.body.name,
        email: req.body.email,
    })
})

// 조회, 데이터 저장(DB에 데이터 삽입), 원래 데이터를 변경하기 위해, 데이터를 삭제
// CRUD(create, read, update, delete)

app.get("/signIn", function (req, res) {
    console.log(req.query) // {id: 'lily', pw: '1234'}
    console.log(req.query.id) // lily

    //req.query : get 요청에 대해 clinet가 보낸 데이터를 담고 있다.
    // url에서 기본주소(loaclhost:8000/get) 뒤에 오는 ?id=lily=&pw=1234 이런 주소를 의미.
    // 기본주소?id = lily&pw=1234
    res.send("회원가입 성공!")
})

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
});