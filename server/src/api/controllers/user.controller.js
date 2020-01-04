import { User } from '../models'

const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secret = process.env.SECRET;



class UserController {
  index = async(req, res, next) => {
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

    //TODO: guard agains duplicate emails
    try {

      const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        profile_img: req.body.profile_img,
        role_id: req.body.role_id,
      })


      //add salted password
      let saltValue = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(user.password,saltValue);

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


  login = (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({ email })
      .then(user => {
        if (!user) {
            errors.email = "No account found with this email address";
            return res.status(404).json(errors);
        }
        bcrypt.compare(password, user.password)
        .then(match => {
            if (match) {
              jwt.sign({
                id: user.id,
                email: user.email
              }, secret, { expiresIn: 36000 },
                (err, token) => {
                  if (err) {
                    res.status(500).json({ error: "Error signing token", raw: err }); 
                  }
                  res.status(200).json({ message: 'Auth Success', token });
              });      
            } else {
              errors.password = "Password is incorrect";                        
              res.status(400).json({ message: 'Auth Failed', errors: errors });
            }
        });
    });
  }

}

export default UserController