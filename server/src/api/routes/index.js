// const mongoose = require('mongoose');

const express = require('express');
const request = require('./request.route');
import subjectRouter from './subject.route'

const router = express.Router();

router.use('/requests', request);
router.use('/subject', subjectRouter)


// const routes = { Request };

module.exports = router;
