import express from 'express';
import { RequestController } from '../controllers';

const requestController = new RequestController();

const requestRouter = express.Router();
/**
 * @swagger
 * tags:
 *  name: Requests
 *  description: Manage requests
 */

/**
 * @swagger
 *
 * /api/v1/request:
 *  get:
 *    tags: [Requests]
 *    parameters:
 *      - name: page
 *        description: Optional parameter for pagination
 *        in: query
 *        required: false
 *        type: int
 *    summary: Get all requests.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: All requests
 *        content:
 *          application/json:
 *            type: array
 *            schema:
 *              $ref: '#/components/schemas/Request'
 *
 *  post:
 *    tags: [Requests]
 *    summary: Create a new request.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: New request created.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Request'
 */
requestRouter.get('/', requestController.index)
  .post('/', requestController.create);

/**
 * @swagger
 *
 * /api/v1/request/search:
 *  get:
 *    tags: [Requests]
 *    parameters:
 *      - name: searchQuery
 *        description: String that is being searched for.
 *        in: query
 *        required: true
 *        type: string
 *    summary: Get all requests whose message matches the searchQuery parameter. ( /api/v1/request/search?seachQuery=WOT )
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Search results
 *        content:
 *          application/json:
 *            type: array
 *            schema:
 *              $ref: '#/components/schemas/Request'
 *
 */
requestRouter.get('/search', requestController.search);
/**
 * @swagger
 * /api/v1/request/{id}:
 *  get:
 *    tags: [Requests]
 *    summary: Get a request by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the request.
 *    responses:
 *      200:
 *        description: Specific request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LiveRequest'
 *  put:
 *    tags: [Requests]
 *    summary: Update a request
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the request.
 *    responses:
 *      200:
 *        description: Updated request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LiveRequest'
 *  delete:
 *    tags: [Requests]
 *    summary: Delete a request
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the request.
 *    responses:
 *      200:
 *        description: Removed a request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Removed request with id
 */
requestRouter.get('/:id', requestController.show)
  .put('/:id', requestController.update)
  .delete('/:id', requestController.destroy);

export default requestRouter;
