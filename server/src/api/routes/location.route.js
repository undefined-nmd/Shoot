import express from 'express';
import { LocationController } from '../controllers';

const locationController = new LocationController();

const locationRouter = express.Router();

/**
 * @swagger
 * tags:
 *  name: Locations
 *  description: Location management
 */

/**
 * @swagger
 *
 * /api/v1/location:
 *  get:
 *    tags: [Locations]
 *    summary: Get all locations.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: All Locations
 *        content:
 *          application/json:
 *            type: array
 *            schema:
 *              $ref: '#/components/schemas/Location'
 *
 *  post:
 *    tags: [Locations]
 *    summary: Create a location.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: New location created.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Location'
 */
locationRouter.get('/', locationController.index)
  .post('/', locationController.create);
/**
 * @swagger
 * /api/v1/location/{id}:
 *  get:
 *    tags: [Locations]
 *    summary: Get a location by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the location.
 *    responses:
 *      200:
 *        description: Specific location
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Location'
 *  put:
 *    tags: [Locations]
 *    summary: Update a location
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the location.
 *    responses:
 *      200:
 *        description: Updated location
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Location'
 *  delete:
 *    tags: [Locations]
 *    summary: Delete a location
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the location.
 *    responses:
 *      200:
 *        description: Removed a location
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Removed location with id
 */
locationRouter.get('/:id', locationController.show)
  .put('/:id', locationController.update)
  .delete('/:id', locationController.destroy);

export default locationRouter;
