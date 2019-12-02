import mongoose from 'mongoose';

const { Schema } = mongoose;

const SubjectSchema = new Schema({
  name: { type: String, required: true, max: 255 },
  description: { type: String, required: true, max: 512 }
});

export default mongoose.model('Subject', SubjectSchema);
