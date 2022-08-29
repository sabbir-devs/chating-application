// extarnal imports
const express = require("express");

// internal imports
const {getUsers} = require('../controller/usersControllar');
const decoratedHtmlResponse = require("../middlewares/common/DecoratedHtmlResponse");

const router = express.Router();

// users page
router.get("/",decoratedHtmlResponse("Users"), getUsers);

module.exports = router;