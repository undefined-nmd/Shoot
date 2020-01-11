import { Location } from '../models'

class LocationController {
  index = async(req, res) => {
    try {
      let locations = null
      locations = await Location.find().exec()

      if (locations === undefined || locations === null) {
        return res.status(404).json({
          message: "No locations were found in the database"
        })
      }

      return res.status(200).json(locations)

    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching locations"
      })
    }
  }

  create = async(req, res, next) => {
    try {
      const location = new Location({
        name: req.body.name,
        coordinates: req.body.coordinates
      })

      const newLocation = await location.save()
      return res.status(200).json(newLocation)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while creating a location"
      })
    }
  }

  show = async(req, res, next) => {
    try {
      const { id } = req.params
      const location = await Location.findById(id).exec()

      if (!location) {
        return res.status(404).json({
          message: `Could not find a location with id ${id}`
        })
      }
      return res.status(200).json(location)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while fetching a location"
      })
    }
  }

  update = async(req, res, next) => {
    try {
      const { id } = req.params
      const locationUpdate = req.body
      const location = await Location.findByIdAndUpdate(id, locationUpdate, { new: true }).exec()

      if(!location) {
        return res.status(404).json({
          message: "Cannot find a location to update"
        })
      }

      return res.status(200).json(location)
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while updating a location"
      })
    }
  }

  destroy = (req, res, next) => {
    const { id } = req.params
    let location = null
    try {
      location = Location.findByIdAndRemove(id).exec()

      if (!location) {
        return res.status(404).json({
          message: `Cannot find location to delete: ${id}`
        })
      }

      return res.status(200).json({
        message: `Successfully deleted location with id: ${id}`
      })
    } catch (err) {
      if(err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while updating a location"
      })
    }
  }
}

export default LocationController