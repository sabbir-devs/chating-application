// extarnal imports
const express = require("express");

// internal imports
const {getLogin} = require('../controller/loginControllar');
const decoratedHtmlResponse = require("../middlewares/common/DecoratedHtmlResponse");

const router = express.Router();

// login page
router.get("/",decoratedHtmlResponse("Login"), getLogin);

module.exports = router;
