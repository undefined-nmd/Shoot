import { Comment } from '../models';

class CommentController {
  index = async (req, res, next) => {
    try {
      let comments = null;
      comments = await Comment.find().populate('post').populate('student').exec()

      if (comments === undefined || comments === null) {
        return res.status(400).json({
          message: "No comments were found in the database"
        })
      }

      return res.status(200).json(comments)
    } catch (err) {
      if (err) {
        return next(err);
      }

      return res.status(500).json({
        message: "An error occured while fetching comments"
      })
    }
  }

  create = async (req, res, next) => {
    try {
      const comment = new Comment({
        message: req.body.message,
        post: req.body.post,
        student: req.body.student,
      })
      
      const newComment = await comment.save()
      return res.status(200).json(newComment)
    } catch (err) {
      if (err) {
        return next(err)
      }
      
      return res.status(500).json({
        message: "An error occured while creating a comment"
      })
    }
  }
}

export default CommentController;