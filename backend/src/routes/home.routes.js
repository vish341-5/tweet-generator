const express = require('express');
const homeControllers = require('../controllers/home.controllers');
const router = express.Router();

router.post('/generate', homeControllers.generateTweet);

module.exports = router;