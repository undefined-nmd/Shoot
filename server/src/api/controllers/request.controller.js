import Request from '../models/request.model'

class RequestController {

  index = async(req, res) => {
    const request = await Request.find().exec()
    console.log(request)
    return res.status(200).json(request)
  }

  create =(req, res, next) => {
    console.log(req)
    const request = new Request({
      student_id: req.body.user_id,
      message: req.body.message,
      subject_id: req.body.subject_id
    })
  
    request.save(err => {
      if (err) return next(err)
      return res.status(200).json(request)
    })
  }
  
  show = (req, res) => {
    Request.findById(req.params.id, (err, request) => {
      if (err) return next(err)
      res.json(request)
    })
  }

  update = async(req, res, next) => {
    const { id } = req.params
    try {
      const requestUpdate = req.body
      console.log(req.body)
      const request = await Request.findByIdAndUpdate(id, requestUpdate, {new: true}).exec()

      if(!request) {
        return res.status(404).json({
          message: "Cannot find request to update"
        })
      }

      return res.status(200).json(request)
    } catch {
      return res.status(500).json({ message: `An error occured when updating ${id}` })
    }
  }
  
  destroy = (req, res) => {
    Request.findByIdAndRemove(req.params.id, (err) => {
      if (err) return next(err)
      res.send(`Removed request: ${req.params.id}`)
    })
  }

}


exports.create = function (req, res) {
  console.log(req.body);
  const request = new Request(
    {
      message: req.body.message
    }
  );

  request.save((err) => {
    if (err) return next(err);
    res.send('Success!');
  });
};

exports.detail = function (req, res) {
  Request.findById(req.params.id, (err, request) => {
    if (err) return next(err);
    res.json(request);
  });
};

exports.update = function (req, res) {
  Request.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, (err, request) => {
    if (err) return next(err);
    res.send(request);
  });
};

exports.delete = function (req, res) {
  Request.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    res.send('Deleted successfully!');
  });
};
