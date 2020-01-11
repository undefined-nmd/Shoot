import { Request } from '../models'

class RequestController {

  constructor(){
    this.requestsPerPage = 10;
  }

  index = async(req, res, next) => {
    try {

      //let requests = null
      let query = Request.find();

      if(req.query.page){
          query.limit(this.requestsPerPage)
            .skip(this.requestsPerPage * req.query.page);          
      }

      if(req.query.subject){
          query.where('subject_id', req.query.subject);      
      }

      if(req.query.student){
        query.where('student_id', req.query.student);      
    }

      if(req.query.sort){
        switch (req.query.sort) {
          case "popular":
            query.sort([['upvoteCount', 1]]);
            break;
          case "latest":
              query.sort([['_id', -1]]);
              break;
          default:
            break;
        }    
    }

      query.populate('student_id', 'first_name last_name profile_img')
        .populate('subject_id', 'name');

      const requests = await query.exec();

      console.log(requests);

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
        student_id: req.body.student_id,
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

      if (!request) {
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

  search = async(req, res, next) => {
    try {

      let requests = null

      if(req.query.searchQuery){
          requests = await Request.find({$text: {$search: req.query.searchQuery}})
          .populate('student_id', 'first_name last_name profile_img')
          .populate('subject_id', 'name')
          .exec()
      }else{
        return res.status(404).json({
          message: "No search string was provided"
        })
      }
      

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

}

export default RequestController