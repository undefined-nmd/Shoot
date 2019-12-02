import subjectRouter from './subject.route';
import requestRouter from './request.route';
import locationRouter from './location.route';
import tagRouter from './tag.route';

const express = require('express');

const router = express.Router();

router.use('/requests', requestRouter);
router.use('/subject', subjectRouter);
router.use('/location', locationRouter);
router.use('/tag', tagRouter);


// const routes = { Request };

module.exports = router;
