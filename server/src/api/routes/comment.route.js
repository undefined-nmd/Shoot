import express from 'express';
import { CommentController } from '../controllers';

const commentController = new CommentController();

const commentRouter = express.Router();
/**
 * @swagger
 * tags:
 *  name: Comments
 *  description: Manage comments
 */

/**
 * @swagger
 *
 * /api/v1/comment:
 *  get:
 *    tags: [Comments]
 *    summary: Get all comments.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: All comments
 *        content:
 *          application/json:
 *            type: array
 *            schema:
 *              $ref: '#/components/schemas/Comment'
 *
 *  post:
 *    tags: [Comments]
 *    summary: Create a new comment.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: New comment created.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Comment'
 */
commentRouter.get('/', commentController.index)
  .post('/', commentController.create);
/**
 * @swagger
 * /api/v1/comment/{id}:
 *  get:
 *    tags: [Comments]
 *    summary: Get a comment by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the comment.
 *    responses:
 *      200:
 *        description: Specific comment
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Comment'
 *  put:
 *    tags: [Comments]
 *    summary: Update a comment
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the comment.
 *    responses:
 *      200:
 *        description: Updated comment
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Comment'
 *  delete:
 *    tags: [Comments]
 *    summary: Delete a comment
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the comment.
 *    responses:
 *      200:
 *        description: Removed a comment
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Removed comment with id
 */
commentRouter.get('/:id', commentController.show)
  .put('/:id', commentController.update)
  .delete('/:id', commentController.destroy);

export default commentRouter;
