import { Vote } from '../models/'

class VoteController {
  index = async(req, res) => {
    try {
      let query = Vote.find();

      if(req.query.student){
        query.where('student_id', req.query.student);      
      }

      const votes = await query.exec();

      if (votes === undefined || votes === null) {
        return res.status(404).json({
          message: "No votes were found in the database"
        })
      }

      return res.status(200).json(votes)

    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching votes"
      })
    }
  }

  create = async(req, res, next) => {
    try {
      const vote = new Vote({
        student_id: req.body.student_id,
        request_id: req.body.request_id
      })

      const duplicate = await Vote.findOne({student_id: req.body.student_id, request_id: req.body.request_id}).exec();
      if (duplicate) return res.status(409).json({
        message: "Vote already exists in database"
      })

      const newVote = await vote.save()
      return res.status(200).json(newVote)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while creating a vote"
      })
    }
  }

  show = async(req, res, next) => {
    try {
      const { id } = req.params
      const vote = await Vote.findById(id).exec()

      if (!vote) {
        return res.status(404).json({
          message: `Could not find a user with id ${id}`
        })
      }
      return res.status(200).json(vote)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching a vote"
      })
    }
  }

  update = async(req, res, next) => {
    try {
      const { id } = req.params
      const userUpdate = req.body
      const user = await Vote.findByIdAndUpdate(id, userUpdate, { new: true }).exec()

      if(!user) {
        return res.status(404).json({
          message: "Cannot find a vote to update"
        })
      }

      return res.status(200).json(user)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while updating a vote"
      })
    }
  }

  destroy = (req, res, next) => {
    const { id } = req.params
    let vote = null
    try {
      vote = Vote.findByIdAndRemove(id).exec()

      if (!vote) {
        return res.status(404).json({
          message: `Cannot find vote to delete: ${id}`
        })
      }

      return res.status(200).json({
        message: `Successfully deleted vote with id: ${id}`
      })
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while destorying a vote"
      })
    }
  }
}

export default VoteController