const express = require('express');
const router = express.Router();
const controller = require('../controller/Clogin');

//임시 라우터
router.get('/visitor/test', controller.getTest);

// ~~~~~:8000 -> index.ejs render
// router.get('/', controller.home);
// ~~~~~:8000 -> index.ejs render
router.get('/', controller.home);

// ~~~~~:8000/visitor -> visitor.ejs render
// router.get('/visitor', controller.visitor);

// 방명록 등록
router.post('/login', controller.postUser);

// 방명록 수정
router.patch('/login', controller.patchUser);

// 방명록 하나 조회
router.get('/login/:id', controller.getUserById);
// 방명록 삭제
router.delete('/login/:id', controller.deleteUser);

module.exports = router;

// userRouter = require('./routes');
