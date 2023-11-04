<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
=======
const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
>>>>>>> ffa03025d39080c633cc03e86cf5cb5b0c1f0643

module.exports = router;
