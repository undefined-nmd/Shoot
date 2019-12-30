import express from 'express';
import { TagController } from '../controllers';

const tagController = new TagController();

const tagRouter = express.Router();

/**
 * @swagger
 * tags:
 *  name: Tags
 *  description: Tag management
 */

/**
 * @swagger
 *
 * /api/v1/tag:
 *  get:
 *    tags: [Tags]
 *    summary: Get all tags.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: All tags
 *        content:
 *          application/json:
 *            type: array
 *            schema:
 *              $ref: '#/components/schemas/Tag'
 *
 *  post:
 *    tags: [Tags]
 *    summary: Create a tag.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: New tag created.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tag'
 */
tagRouter.get('/', tagController.index)
  .post('/', tagController.create);
/**
 * @swagger
 * /api/v1/tag/{id}:
 *  get:
 *    tags: [Tags]
 *    summary: Get a tag by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the tag.
 *    responses:
 *      200:
 *        description: Specific tag
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tag'
 *  put:
 *    tags: [Tags]
 *    summary: Update a tag
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the tag.
 *    responses:
 *      200:
 *        description: Updated tag
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tag'
 *  delete:
 *    tags: [Tags]
 *    summary: Delete a tag
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the tag.
 *    responses:
 *      200:
 *        description: Removed a tag
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Removed tag with id
 */
tagRouter.get('/:id', tagController.show)
  .put('/:id', tagController.update)
  .delete('/:id', tagController.destroy);

export default tagRouter;
