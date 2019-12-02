import mongoose from 'mongoose';

const { Schema } = mongoose;

const SubjectUserSchema = new Schema({
  subject_id: { type: Schema.Types.ObjectId, ref: 'Subject' },
  user_id: { type: Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('SubjectUser', SubjectUserSchema);
