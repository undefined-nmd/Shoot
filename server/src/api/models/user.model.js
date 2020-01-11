import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - first_name
 *        - last_name
 *        - email
 *         - password
 *        - profile_img
 *        - role_id
 *      properties:
 *        first_name:
 *          type: string
 *          description: first name of user
 *        last_name:
 *          type: string
 *          description: Last name of user
 *        email:
 *          type: string
 *          format: email
 *          description: email of user, needs to be unique
 *        password:
 *          type: string
 *          format: password
 *          description: user password
 *        score:
 *          type: number
 *          description: current use score.
 *        profile_img:
 *          type: string
 *          description: link to profile image
 *        role_id:
 *          type: string
 *          description: id of role applied to the user
 *        subjects:
 *          type: array
 *          description: Array of subjects a user follows.
 *      example:
 *        first_name: Jan
 *        last_name: Janssens
 *        email: 'jan.janssens@provider.be'
 *        password: 'secret'
 *        score: 120
 *        profile_img: './images/users/1/avatar.jpg'
 *        role_id: 5e0a00d302353a2b14e06aca
 *        subjects: [5e09f95a1c9d44000029b1e0, 5e0a071b1c9d440000ada964]
 *
 */
const UserSchema = new Schema({
  first_name: { type: String, required: true, max: 64 },
  last_name: { type: String, required: true, max: 64 },
  email: { type: String, required: true },
  password: { type: String, required: true },
  score: { type: Number, min: 0 },
  profile_img: { type: String, required: true },
  study: { type: String, required: true },
  role_id: { type: Schema.Types.ObjectId, required: true, ref: 'Role' },
  subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
  badges: [{ type: Schema.Types.ObjectId, ref: 'Badge' }],
});

export default mongoose.model('User', UserSchema);
