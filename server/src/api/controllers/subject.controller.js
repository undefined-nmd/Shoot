import Subject from '../models/'

class SubjectController {
  index = async(req, res) => {
    try {
      let subjects = null
      subjects = await Subject.find().exec()

      if (subjects === undefined || subjects === null) {
        return res.status(404).json({
          message: "No subjects were found in the database"
        })
      }

      return res.status(200).json(subjects)

    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching subjects"
      })
    }
  }

  create = async(req, res, next) => {
    try {
      const subject = new Subject({
        name: req.body.name,
        description: req.body.description
      })

      const newUser = await subject.save()
      return res.status(200).json(newUser)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while creating a subject"
      })
    }
  }

  show = async(req, res, next) => {
    try {
      const { id } = req.params
      const subject = await Subject.findById(id).exec()

      if (!item) {
        return res.status(404).json({
          message: `Could not find a subject with id ${id}`
        })
      }
      return res.status(200).json(subject)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching a subject"
      })
    }
  }

  update = async(req, res, next) => {
    try {
      const { id } = req.params
      const subjectUpdate = req.body
      const subject = await Subject.findByIdAndUpdate(id, subjectUpdate, { new: true }).exec()

      if(!subject) {
        return res.status(404).json({
          message: "Cannot find a subject to update"
        })
      }

      return res.status(200).json(subject)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while updating a subject"
      })
    }
  }

  destroy = (req, res, next) => {
    const { id } = req.params
    let subject = null
    try {
      subject = Subject.findByIdAndRemove(id).exec()

      if (!subject) {
        return res.status(404).json({
          message: `Cannot find subject to delete: ${id}`
        })
      }

      return res.status(200).json({
        message: `Successfully deleted subject with id: ${id}`
      })
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while destroying a subject"
      })
    }
  }
}

export default SubjectController