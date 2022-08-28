// extarnal imports
const express = require("express");

// internal imports
const {getLogin} = require('../controller/loginControllar');

const router = express.Router();

// login page
router.get("/", getLogin);

module.exports = router;
