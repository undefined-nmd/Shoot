import { RequestController } from '../controllers/'

const requestController = new RequestController()

const initializeEndpoints = (parentRouter) => {
    parentRouter.get('/requests', requestController.index)
}

export default initializeEndpoints