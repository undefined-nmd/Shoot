import mongoose from 'mongoose'

import Request from './request.schema'

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL)
}

const models  = {
    Request
}

export {
    connectDb
}

export default models