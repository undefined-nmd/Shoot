// const mongoose = require('mongoose');

const express = require('express');
const request = require('./request.route');

const router = express.Router();

router.use('/requests', request);


// const routes = { Request };

module.exports = router;
