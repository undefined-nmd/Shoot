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

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Request = mongoose.model('Request', requestSchema);

export default Request;
