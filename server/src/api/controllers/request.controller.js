import Request from '../models'
import { APIError, handleAPIError } from '../../utilities/'

class RequestController {
    /**
     * List all models
     */
    index = async (req, res, next) => {
        try {
            const requests = await Request.find().exec()
            console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')

            if(requests === undefined || requests === null) {
                throw new APIError(404, 'Collection for requests not found!')
            }

            return res.status(200).json(requests)
        } catch (err) {
            return handleAPIError(500, err.message || 'Some error occured while retrieving requests')
        }
    }
}

export default RequestController