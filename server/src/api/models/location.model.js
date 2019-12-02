import mongoose from 'mongoose';

const { Schema } = mongoose;

const LocationSchema = new Schema({
  name: { type: String, required: true, max: 1000 },
});

export default mongoose.model('Location', LocationSchema);
