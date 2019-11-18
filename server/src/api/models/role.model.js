import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoleSchema = new Schema({
  name: { type: String, required: true, max: 100 },
});

export default mongoose.model('Role', RoleSchema);
