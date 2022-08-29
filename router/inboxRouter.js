// extarnal imports
const express = require("express");

// internal imports
const {getInbox} = require('../controller/inboxControllar');
const decoratedHtmlResponse = require("../middlewares/common/DecoratedHtmlResponse");

const router = express.Router();

// inbox page
router.get("/",decoratedHtmlResponse("Inbox"), getInbox);

module.exports = router;