import Request from '../models/request.model'

class RequestController {

  index = async(req, res) => {
    try {
      let requests = null
      requests = await Request.find().exec()

      if (requests === undefined || requests === null) {
        return res.status(404).json({
          message: "No requests were found in the database"
        })
      }

      return res.status(200).json(requests)

    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching requests"
      })
    }
  }

  create = async(req, res, next) => {
    try {
      const request = new Request({
        student_id: req.body.user_id,
        message: req.body.message,
        subject_id: req.body.subject_id
      })

      const newRequest = await request.save()
      return res.status(200).json(newRequest)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while creating a request"
      })
    }
  }
  
  show = async(req, res, next) => {
    try {
      const { id } = req.params
      const request = await Request.findById(id).exec()

      if (!item) {
        return res.status(404).json({
          message: `Could not find a request with id ${id}`
        })
      }
      return res.status(200).json(request)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching a request"
      })
    }
  }

  update = async(req, res, next) => {
    try {
      const { id } = req.params
      const requestUpdate = req.body
      const request = await Request.findByIdAndUpdate(id, requestUpdate, { new: true }).exec()

      if(!request) {
        return res.status(404).json({
          message: "Cannot find a request to update"
        })
      }

      return res.status(200).json(request)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while updating a request"
      })
    }
  }
  
  destroy = (req, res, next) => {
    const { id } = req.params
    let request = null
    try {
      request = Request.findByIdAndRemove(id).exec()

      if (!request) {
        return res.status(404).json({
          message: `Cannot find request to delete: ${id}`
        })
      }

      return res.status(200).json({
        message: `Successfully deleted request with id: ${id}`
      })
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while updating a request"
      })
    }
  }

}

export default RequestController