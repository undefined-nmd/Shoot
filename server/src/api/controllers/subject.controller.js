import Subject from '../models/subject.model'

class SubjectController {
  index = async(req, res) => {
    const subjects = await Subject.find().exec()
    console.log(subjects)
    return res.status(200).json(subjects)
  }

  create =(req, res, next) => {
    console.log(req)
    const subject = new Subject({
      name: req.body.name,
      description: req.body.description
    })
    console.log(subject.name)
  
    subject.save(err => {
      if (err) return next(err)
      return res.status(200).json(subject)
    })
  }
  
  show = (req, res) => {
    Subject.findById(req.params.id, (err, request) => {
      if (err) return next(err)
      res.json(request)
    })
  }
  
  update = async(req, res, next) => {
    try {
      const { id } = req.params
      const subjectUpdate = req.body
      console.log(req.body)
      const subject = await Subject.findByIdAndUpdate(id, subjectUpdate, {new: true}).exec()

      if(!subject) {
        return res.status(404).json({
          message: "Cannot find subject to update"
        })
      }

      return res.status(200).json(subject)
    } catch {
      return res.status(500).json({ message: `An error occured when updating ${id}` })
    }
  }
  
  destroy = (req, res) => {
    Subject.findByIdAndRemove(req.params.id, (err) => {
      if (err) return next(err)
      res.send(`Removed subject: ${req.params.id}`)
    })
  }
}

export default SubjectController

