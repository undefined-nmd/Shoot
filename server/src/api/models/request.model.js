import mongoose from 'mongoose';

const { Schema } = mongoose;

const RequestSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  message: { type: String, required: true, max: 1000 },
  upvote_count: { type: Number, min: 0, default: 0 },
  subject_id: { type: Schema.Types.ObjectId, required: true, ref: 'Subject' },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
});

export default mongoose.model('Request', RequestSchema);
