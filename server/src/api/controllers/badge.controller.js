import { Badge } from '../models';

class BadgeController {
  index = async (req, res, next) => {
    try {
      let badges = null;
      badges = await Badge.find().exec();
  
      if (badges === undefined || badges === null) {
        return res.status(404).json({
          message: "No badges were found in the database"
        });
      }

      return res.status(200).json(badges);
    } catch (err) {
      if (err) {
        return next(err)
      }

      return res.status(500).json({
        message: "An error occured while fetching badges"
      });
    }
  }

  create = async (req, res, next) => {
    try {
      const badge = new Badge({
        name: req.body.name,
        image: req.body.image,
        score: req.body.score
      });

      const newBadge = await badge.save();
      return res.status(200).json(newBadge);
    } catch (err) {
      if (err) {
        return next(err)
      }
      return res.status(500).json({
        message: "An error occured while creating a badge."
      })
    }
  }

  show = async (req, res, next) => {
    try {
      const { id } = req.params;
      const badge = await Badge.findById(id).exec();
  
      if (!badge) {
        return res.status(404).json({
          message: `Could not find a badge with id: ${id}`
        })
      }
      return res.status(200).json(badge)
    } catch (err) {
      if (err) {
        return next(err)
      }

      return res.status(500).json({
        message: "An error occured while fetching a badge"
      })
    }
  }

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const badgeUpdate = req.body;
      const badge = await (await Badge.findByIdAndUpdate(id, badgeUpdate, { new: true })).exec();

      if (!badge) {
        return res.status(404).json({
          message: "Cannot find a badge to update"
        })
      }

      return res.status(200).json(badge)
    } catch (err) {
      if (err) {
        return next(err)
      }
      return res.status(404).json({
        message: "An error occured while updating a badge"
      })
    }
  }

  destroy = (req, res, next) => {
    try {
      const { id } = req.params
      let badge = null
      badge = Badge.findByIdAndRemove(id).exec()

      if (!badge) {
        return res.status(404).json({
          message: `Cannot find badge to delete: ${id}`
        })
      }

      return res.status(200).json({
        message: `Successfully deleted badge with id: ${id}`
      })
    } catch (err) {
      if (err) {
        return next(err)
      }

      return res.status(500).json({
        message: "An error occured while destroying a badge"
      })
    }
  }
}

export default BadgeController;
