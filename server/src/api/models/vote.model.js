import mongoose from 'mongoose';

const { Schema } = mongoose;

/**
 * @swagger
 * components:
 *  schemas:
 *    Vote:
 *      type: object
 *      required:
 *        - student_id
 *        - request_id
 *      properties:
 *        student_id:
 *          type: string
 *          description: ID of sending student
 *        request_id:
 *          type: string
 *          description: ID of request that is being voted on
 *      example:
 *        student_id: 5dad6bf132df1e35dc34b14f
 *        request_id: 5e0a5ee6b2a65d540c6f79a8
 */

const VoteSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  request_id: { type: Schema.Types.ObjectId, required: true, ref: 'Request' },
});

export default mongoose.model('Vote', VoteSchema);
