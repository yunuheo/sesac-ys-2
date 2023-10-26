const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// 요청에 대한 정보를 모아둠.

// localhost:8000/comment/~~~~
router.get('/', controller.main);

// localhost:8000/comments
router.get('/comments', controller.comments);

module.exports = router;
