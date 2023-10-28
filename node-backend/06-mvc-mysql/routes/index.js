const express = require('express');
const router = express.Router();
const contorlloer = require('../controller/Cvisitor');

// ~~~~:8000 => index.ejs
router.get('/', contorlloer.home);
// ~~~~:8000/visitor => visitor.ejs render
router.get('/visitors', contorlloer.visitor);

// 방명록 등록
router.post('/visitor', contorlloer.postVisitor);

// 방명록 수정
router.patch('/visitor/:id', function (req, res) {
  res.send('');
});
// 방명록 삭제
router.delete('/visitor/:id', contorlloer.deleteVisitor);

module.exports = router;
