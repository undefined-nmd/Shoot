import express from 'express';
import { LiveRequestController } from '../controllers';

const liveRequestController = new LiveRequestController();
const liveRequestRouter = express.Router();

/**
 * @swagger
 * tags:
 *  name: Live Requests
 *  description: Manage live requests
 */

/**
 * @swagger
 *
 * /api/liveRequest:
 *  get:
 *    tags: [Live Requests]
 *    summary: Get all live requests.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: All live requests
 *        content:
 *          application/json:
 *            type: array
 *            schema:
 *              $ref: '#/components/schemas/LiveRequest'
 *
 *  post:
 *    tags: [Live Requests]
 *    summary: Create a new live request.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: New live request created.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LiveRequest'
 */
liveRequestRouter.get('/', liveRequestController.index)
  .post('/', liveRequestController.create);
/**
 * @swagger
 * /api/liveRequest/{id}:
 *  get:
 *    tags: [Live Requests]
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
 *        description: Specific user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LiveRequest'
 *  put:
 *    tags: [Live Requests]
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
 *    tags: [Live Requests]
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
liveRequestRouter.get('/:id', liveRequestController.show)
  .put('/:id', liveRequestController.update)
  .delete('/:id', liveRequestController.destroy);

export default liveRequestRouter;
