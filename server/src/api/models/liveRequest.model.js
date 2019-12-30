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
 *          type: string
 *          description: ID of sender
 *        message:
 *          type: string
 *          description: Message for the request
 *        location:
 *          type: string
 *          description: Location ID
 *        subject_id:
 *           type: string
 *           description: subject ID
 *      example:
 *        student_id: 5dad6bf132df1e35dc34b14f
 *        message: "I need help with some homework!"
 *        location: 5e0a02c947905e5a6de28a0c
 *        subject_id: 5e09f95a1c9d44000029b1e0
 */
const LiveRequestSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  message: { type: String, required: true, max: 1000 },
  location: { type: Schema.Types.ObjectId, required: true, ref: 'Location' },
  subject_id: { type: Schema.Types.ObjectId, required: true, ref: 'Subject' }
});

export default mongoose.model('LiveRequest', LiveRequestSchema);
