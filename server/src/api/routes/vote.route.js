import express from 'express';
import { VoteController } from '../controllers';

const voteController = new VoteController();

const voteRouter = express.Router();
/**
 * @swagger
 * tags:
 *  name: Votes
 *  description: Manage votes
 */

/**
 * @swagger
 *
 * /api/v1/vote:
 *  get:
 *    tags: [Votes]
 *    summary: Get all votes.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: All votes
 *        content:
 *          application/json:
 *            type: array
 *            schema:
 *              $ref: '#/components/schemas/Vote'
 *
 *  post:
 *    tags: [Votes]
 *    summary: Create a new vote.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: New vote created.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Vote'
 */
voteRouter.get('/', voteController.index)
  .post('/', voteController.create);

/**
 * @swagger
 * /api/v1/vote/{id}:
 *  get:
 *    tags: [Votes]
 *    summary: Get a vote by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID of the vote.
 *    responses:
 *      200:
 *        description: Specific vote
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Vote'
 *  put:
 *    tags: [Votes]
 *    summary: Update a vote
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID of the vote.
 *    responses:
 *      200:
 *        description: Updated vote
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Vote'
 *  delete:
 *    tags: [Votes]
 *    summary: Delete a vote
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID of the vote.
 *    responses:
 *      200:
 *        description: Removed a vote
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Removed vote with id
 */
voteRouter.get('/:id', voteController.show)
  .put('/:id', voteController.update)
  .delete('/:id', voteController.destroy);

export default voteRouter;
