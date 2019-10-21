import express from 'express'

// import routers
import requestRouter from './request.routes'

const apiV1Router = express.Router()
requestRouter(apiV1Router)

export default apiV1Router