const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain2');

// 요청에 대한 정보를 모아둠.

// localhost:8000/comment/~~~~
router.get('/', controller.main);

// localhost:8000/comments
router.get('/axios', controller.login);

module.exports = router;
