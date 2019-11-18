import subjectRouter from './subject.route';

const express = require('express');
const request = require('./request.route');


const router = express.Router();

router.use('/requests', request);
router.use('/subject', subjectRouter);


// const routes = { Request };

module.exports = router;
