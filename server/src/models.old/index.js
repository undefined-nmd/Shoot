import mongoose from 'mongoose';

import User from './user';
import Request from './request';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Request };

export { connectDb };

export default models;
