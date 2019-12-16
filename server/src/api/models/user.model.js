import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name: { type: String, required: true, max: 64 },
  last_name: { type: String, required: true, max: 64 },
  email: { type: String, required: true },
  gender: { type: String, max: 1 },
  score: { type: Number, min: 0 },
  profile_img: { type: String, required: true },
  role_id: { type: Schema.Types.ObjectId, required: true, ref: 'Role' },
  subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }]
});

export default mongoose.model('User', UserSchema);
