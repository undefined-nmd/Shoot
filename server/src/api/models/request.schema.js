import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  upvote_count: {
    type: Number,
    required: true,
  },
  subject_id: {
    type: String,
    required: true,
  },
  request_type: {
    type: Number,
    required: true,
  },
  location: {
    type: Object,
    required: false
  },

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Request = mongoose.model('Request', requestSchema);

export default Request;