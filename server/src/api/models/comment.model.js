import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * @swagger
 * components:
 *  schemas:
 *    Comment:
 *      type: object
 *      required:
 *        - student_id
 *        - request_id
 *        - message
 *        - upvote_count
 *      properties:
 *        student_id:
 *          type: string
 *          description: ID of sending student
 *        request_id:
 *          type: string
 *          description: ID of request that is being commented
 *        message:
 *          type: string
 *          description: comment content
 *        upvote_count:
 *          type: number
 *          description: amount of votes (defaults at 0)
 *
 *      example:
 *        student_id: 5dad6bf132df1e35dc34b14f
 *        request_id: 5e0a5ee6b2a65d540c6f79a8
 *        message: Yes I agree, Samantha, math IS hard.
 *        upvote_count: 2
 */
const CommentSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  request_id: { type: Schema.Types.ObjectId, required: true, ref: 'Request' },
  message: { type: String, required: true, max: 1000 },
  upvote_count: { type: Number, min: 0, default: 0 },
});

export default mongoose.model('Comment', CommentSchema);
