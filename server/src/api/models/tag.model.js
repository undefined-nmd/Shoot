import mongoose from 'mongoose';

const { Schema } = mongoose;

const TagSchema = new Schema({
  name: { type: String, required: true, max: 100 },
});

export default mongoose.model('Tag', TagSchema);
