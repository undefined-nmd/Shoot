import { Role } from '../models/'

class RoleController {
  index = async(req, res) => {
    try {
      let roles = null
      roles = await Role.find().exec()

      if (roles === undefined || roles === null) {
        return res.status(404).json({
          message: "No roles were found in the database"
        })
      }

      return res.status(200).json(roles)

    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching roles"
      })
    }
  }

  create = async(req, res, next) => {
    try {
      const role = new Role({
        name: req.body.name
      })

      const newRole = await role.save()
      return res.status(200).json(newRole)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while creating a role"
      })
    }
  }

  show = async(req, res, next) => {
    try {
      const { id } = req.params
      const role = await Role.findById(id).exec()

      if (!item) {
        return res.status(404).json({
          message: `Could not find a role with id ${id}`
        })
      }
      return res.status(200).json(role)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching a role"
      })
    }
  }

  update = async(req, res, next) => {
    try {
      const { id } = req.params
      const roleUpdate = req.body
      const role = await Role.findByIdAndUpdate(id, roleUpdate, { new: true }).exec()

      if(!role) {
        return res.status(404).json({
          message: "Cannot find a role to update"
        })
      }

      return res.status(200).json(role)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while updating a role"
      })
    }
  }

  destroy = (req, res, next) => {
    const { id } = req.params
    let role = null
    try {
      role = Role.findByIdAndRemove(id).exec()

      if (!role) {
        return res.status(404).json({
          message: `Cannot find role to delete: ${id}`
        })
      }

      return res.status(200).json({
        message: `Successfully deleted role with id: ${id}`
      })
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while destroying a role"
      })
    }
  }
}

export default RoleController