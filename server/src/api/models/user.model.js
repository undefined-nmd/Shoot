import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name: { type: String, required: true, max: 50 },
  last_name: { type: String, required: true, max: 100 },
  email: { type: String, required: true },
  gender: { type: String, max: 1 },
  score: { type: Number, min: 0 },
  profile_img: { type: String },
  role_id: { type: Schema.Types.ObjectId, ref: 'Role' },
});

export default mongoose.model('User', UserSchema);
