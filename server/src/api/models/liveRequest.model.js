import mongoose from 'mongoose';

const { Schema } = mongoose;

const LiveRequestSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, ref: 'User' },
  message: { type: String, required: true, max: 1000 },
  location: { type: Number, min: 0 },
  subject_id: { type: Schema.Types.ObjectId, ref: 'Subject' }
});

export default mongoose.model('LiveRequest', LiveRequestSchema);
