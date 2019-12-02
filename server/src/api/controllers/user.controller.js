import User from '../models/'

class UserController {
  index = async(req, res) => {
    try {
      let users = null
      users = await User.find().exec()

      if (users === undefined || users === null) {
        return res.status(404).json({
          message: "No users were found in the database"
        })
      }

      return res.status(200).json(users)

    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching users"
      })
    }
  }

  create = async(req, res, next) => {
    try {
      const user = new User({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
        profile_img: req.body.image,
      })

      const newUser = await user.save()
      return res.status(200).json(newUser)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while creating a user"
      })
    }
  }

  show = async(req, res, next) => {
    try {
      const { id } = req.params
      const user = await User.findById(id).exec()

      if (!user) {
        return res.status(404).json({
          message: `Could not find a user with id ${id}`
        })
      }
      return res.status(200).json(user)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching a user"
      })
    }
  }

  update = async(req, res, next) => {
    try {
      const { id } = req.params
      const userUpdate = req.body
      const user = await User.findByIdAndUpdate(id, userUpdate, { new: true }).exec()

      if(!user) {
        return res.status(404).json({
          message: "Cannot find a user to update"
        })
      }

      return res.status(200).json(user)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while updating a user"
      })
    }
  }

  destroy = (req, res, next) => {
    const { id } = req.params
    let user = null
    try {
      user = User.findByIdAndRemove(id).exec()

      if (!user) {
        return res.status(404).json({
          message: `Cannot find user to delete: ${id}`
        })
      }

      return res.status(200).json({
        message: `Successfully deleted user with id: ${id}`
      })
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while destorying a user"
      })
    }
  }
}

export default UserController