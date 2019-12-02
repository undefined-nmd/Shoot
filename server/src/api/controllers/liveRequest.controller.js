import { liveRequest } from '../models/'

class liveRequestController {
  index = async(req, res) => {
    try {
      let liveRequests = null
      liveRequests = await liveRequest.find().exec()

      if (liveRequests === undefined || liveRequests === null) {
        return res.status(404).json({
          message: "No live requests were found in the database"
        })
      }

      return res.status(200).json(liveRequests)

    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching live requests"
      })
    }
  }

  create = async(req, res, next) => {
    try {
      const liveRequests = new liveRequest({
        student_id: req.body.studentId,
        message: req.body.message,
        location: req.body.location,
        subject_id: req.body.subject_id
      })

      const newLiveRequest = await liveRequests.save()
      return res.status(200).json(newLiveRequest)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while creating a live request"
      })
    }
  }

  show = async(req, res, next) => {
    try {
      const { id } = req.params
      const liveRequest = await liveRequest.findById(id).exec()

      if (!liveRequest) {
        return res.status(404).json({
          message: `Could not find a live request with id ${id}`
        })
      }
      return res.status(200).json(liveRequest)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching a live request"
      })
    }
  }

  update = async(req, res, next) => {
    try {
      const { id } = req.params
      const liveRequestUpdate = req.body
      const liveRequest = await liveRequest.findByIdAndUpdate(id, liveRequestUpdate, { new: true }).exec()

      if(!liveRequest) {
        return res.status(404).json({
          message: "Cannot find a live request to update"
        })
      }

      return res.status(200).json(liveRequest)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while updating a live request"
      })
    }
  }

  destroy = (req, res, next) => {
    const { id } = req.params
    let liveRequest = null
    try {
      liveRequest = liveRequest.findByIdAndRemove(id).exec()

      if (!liveRequest) {
        return res.status(404).json({
          message: `Cannot find live request to delete: ${id}`
        })
      }

      return res.status(200).json({
        message: `Successfully deleted live request with id: ${id}`
      })
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while destorying a live request"
      })
    }
  }
}

export default liveRequestController