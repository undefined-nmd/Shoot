import Tag from '../models/'

class TagController {
  index = async(req, res) => {
    try {
      let tags = null
      tags = await Tag.find().exec()

      if (tags === undefined || tags === null) {
        return res.status(404).json({
          message: "No tags were found in the database"
        })
      }

      return res.status(200).json(tags)

    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching tags"
      })
    }
  }

  create = async(req, res, next) => {
    try {
      const tag = new Tag({
        name: req.body.name
      })

      const newTag = await tag.save()
      return res.status(200).json(newTag)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while creating a tag"
      })
    }
  }

  show = async(req, res, next) => {
    try {
      const { id } = req.params
      const tag = await Tag.findById(id).exec()

      if (!tag) {
        return res.status(404).json({
          message: `Could not find a user with id ${id}`
        })
      }
      return res.status(200).json(tag)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching a tag"
      })
    }
  }

  update = async(req, res, next) => {
    try {
      const { id } = req.params
      const userUpdate = req.body
      const user = await Tag.findByIdAndUpdate(id, userUpdate, { new: true }).exec()

      if(!user) {
        return res.status(404).json({
          message: "Cannot find a tag to update"
        })
      }

      return res.status(200).json(user)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while updating a tag"
      })
    }
  }

  destroy = (req, res, next) => {
    const { id } = req.params
    let tag = null
    try {
      tag = Tag.findByIdAndRemove(id).exec()

      if (!tag) {
        return res.status(404).json({
          message: `Cannot find tag to delete: ${id}`
        })
      }

      return res.status(200).json({
        message: `Successfully deleted tag with id: ${id}`
      })
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while destorying a tag"
      })
    }
  }
}

export default TagController