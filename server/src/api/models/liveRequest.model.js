import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * @swagger
 * components:
 *  schemas:
 *    LiveRequest:
 *      type: object
 *      required:
 *        - student_id
 *        - message
 *        - location
 *        - subject_id
 *      properties:
 *        student_id:
 *          type: number
 *          description: ID of sender
 *        message:
 *          type: string
 *          description: Message for the request
 *        location:
 *          type: number
 *          description: Location ID
 *        subject_id:
 *           type: number
 *           description: subject ID
 *      example:
 *        student_id: 12
 *        message: "I need help with some homework!"
 *        location: 1
 *        subject_id: 2
 */
const LiveRequestSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  message: { type: String, required: true, max: 1000 },
  location: { type: Schema.Types.ObjectId, required: true, ref: 'Location' },
  subject_id: { type: Schema.Types.ObjectId, required: true, ref: 'Subject' }
});

export default mongoose.model('LiveRequest', LiveRequestSchema);
