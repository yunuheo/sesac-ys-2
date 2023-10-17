const express = require("express");
const app = express();
const PORT = 8010;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/get", function (req, res) {
    // console.log(req.body);
    res.send("post 요청 성공!")
    console.log(req.query)

})

app.post("/post/ver2", function (req, res) {
    console.log(req.body);
    res.render("result", {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        yy: req.body.yy,
        mm: req.body.mm,
        dd: req.body.dd,
        number: req.body.number,
        hobby: req.body.hobby,
        color: req.body.color,
    })
})

app.post("/post/validation", function (req, res) {
    console.log(req.body);
        res.render("result3", {
            id: req.body.id,
            pw: req.body.pw,
            name: req.body.name,
            gender: req.body.gender,
            tel: req.body.tel,
            
        })
    })

    app.listen(PORT, function () {
        console.log(`Sever Open: ${PORT}`);
    });