import mongoose from 'mongoose';

const { Schema } = mongoose;

const VoteSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  subject_id: { type: Schema.Types.ObjectId, required: true, ref: 'Request' },
});

export default mongoose.model('Vote', VoteSchema);
