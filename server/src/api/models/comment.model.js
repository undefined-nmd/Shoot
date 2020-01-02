import mongoose from 'mongoose';

const { Schema } = mongoose;

const CommentSchema = new Schema({
  message: {
    type: String,
    required: true,
    max: 512,
  },
  vote_count: {
    type: Number,
    min: 0,
    default: 0,
  },
  post: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Request'
  },
  student: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  }
});

export default mongoose.model('Comment', CommentSchema);
