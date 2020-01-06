import subjectRouter from './subject.route';
import requestRouter from './request.route';
import locationRouter from './location.route';
import tagRouter from './tag.route';
import liveRequestRouter from './liveRequest.route';
import userRouter from './user.route';
import roleRouter from './role.route';
import commentRouter from './comment.route';
import authRouter from './auth.route';
import voteRouter from './vote.route';


const express = require('express');
const passport = require('passport');

const router = express.Router();

router.use('/request', passport.authenticate('jwt', { session: false }), requestRouter);
router.use('/subject', passport.authenticate('jwt', { session: false }), subjectRouter);
router.use('/location', passport.authenticate('jwt', { session: false }), locationRouter);
router.use('/tag', passport.authenticate('jwt', { session: false }), tagRouter);
router.use('/role', passport.authenticate('jwt', { session: false }), roleRouter);
router.use('/liveRequest', passport.authenticate('jwt', { session: false }), liveRequestRouter);
router.use('/user', passport.authenticate('jwt', { session: false }), userRouter);
router.use('/comment', passport.authenticate('jwt', { session: false }), commentRouter);
router.use('/vote', passport.authenticate('jwt', { session: false }), voteRouter);
router.use('/auth', authRouter);


module.exports = router;
