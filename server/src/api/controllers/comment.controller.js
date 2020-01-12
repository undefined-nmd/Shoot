import { Comment } from '../models/'

class CommentController {
  index = async(req, res, next) => {
    try {
      let comments = null
      comments = await Comment.find().populate('student_id', 'first_name last_name profile_img').exec()

      if (comments === undefined || comments === null) {
        return res.status(404).json({
          message: "No comments were found in the database"
        })
      }

      return res.status(200).json(comments)

    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching comments"
      })
    }
  }

  create = async(req, res, next) => {
    try {
      const comment = new Comment({
        student_id: req.body.student_id,
        request_id: req.body.request_id,
        message: req.body.message,
        upvote_count: req.body.upvote_count
      })

      const newComment = await comment.save()
      return res.status(200).json(newComment)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while creating a comment"
      })
    }
  }

  show = async(req, res, next) => {
    try {
      const { id } = req.params
      const comment = await Comment.findById(id).exec()

      if (!comment) {
        return res.status(404).json({
          message: `Could not find a comment with id ${id}`
        })
      }
      return res.status(200).json(comment)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching a comment"
      })
    }
  }

  update = async(req, res, next) => {
    try {
      const { id } = req.params
      const commentUpdate = req.body
      const comment = await Comment.findByIdAndUpdate(id, commentUpdate, { new: true }).exec()

      if(!comment) {
        return res.status(404).json({
          message: "Cannot find a comment to update"
        })
      }

      return res.status(200).json(comment)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while updating a comment"
      })
    }
  }

  destroy = (req, res, next) => {
    const { id } = req.params
    let comment = null
    try {
      comment = Comment.findByIdAndRemove(id).exec()

      if (!comment) {
        return res.status(404).json({
          message: `Cannot find comment to delete: ${id}`
        })
      }

      return res.status(200).json({
        message: `Successfully deleted comment with id: ${id}`
      })
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while destroying a comment"
      })
    }
  }
}

export default CommentController