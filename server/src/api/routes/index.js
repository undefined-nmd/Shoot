import subjectRouter from './subject.route';
import requestRouter from './request.route';
import locationRouter from './location.route';
import tagRouter from './tag.route';
import liveRequestRouter from './liveRequest.route';
import userRouter from './user.route';
import roleRouter from './role.route';
import commentRouter from './comment.route';
import voteRouter from './vote.route';

const express = require('express');

const router = express.Router();

router.use('/request', requestRouter);
router.use('/subject', subjectRouter);
router.use('/location', locationRouter);
router.use('/tag', tagRouter);
router.use('/role', roleRouter);
router.use('/liveRequest', liveRequestRouter);
router.use('/user', userRouter);
router.use('/comment', commentRouter);
router.use('/vote', voteRouter)

// const routes = { Request };

module.exports = router;
