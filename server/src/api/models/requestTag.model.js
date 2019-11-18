import mongoose from 'mongoose';

const { Schema } = mongoose;

const requestTagSchema = new Schema({
  request_id: { type: Schema.Types.ObjectId, ref: 'Request' },
  tag_id: { type: Schema.Types.ObjectId, ref: 'Tag' }
});

export default mongoose.model('requestTag', requestTagSchema);
