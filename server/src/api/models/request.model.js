import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * @swagger
 * components:
 *  schemas:
 *    Request:
 *      type: object
 *      required:
 *        - student_id
 *        - message
 *        - subject_id
 *      properties:
 *        student_id:
 *          type: string
 *          description: ID of sending student
 *        message:
 *          type: string
 *          description: Request message
 *        upvote_count:
 *          type: number
 *          description: amount of votes (defaults at 0)
 *        subject_id:
 *          type: string
 *          description: ID of subject
 *        tags:
 *          type: array
 *          items:
 *            $ref: #/components/schemas/Tag
 *
 *      example:
 *        student_id: 5dad6bf132df1e35dc34b14f
 *        message: What does this thing mean?
 *        upvote_count: 7
 *        subject_id: 5e09f95a1c9d44000029b1e0
 *        tags: [test, frontend]
 */
const RequestSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  message: { type: String, required: true, max: 1000 },
  upvote_count: { type: Number, min: 0, default: 0 },
  subject_id: { type: Schema.Types.ObjectId, required: true, ref: 'Subject' },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
});

export default mongoose.model('Request', RequestSchema);
