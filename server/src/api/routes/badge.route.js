import express from 'express';
import { BadgeController } from '../controllers';

const badgeController = new BadgeController();

const badgeRouter = express.Router();

/**
 * @swagger
 * tags:
 *  name: Badges
 *  description: Manage badges
 *
 * /api/v1/badge:
 *  get:
 *    tags: [Badges]
 *    summary: Get all badges.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: All badges
 *        content:
 *          application/json:
 *            type: array
 *            schema:
 *              $ref: '#/components/schemas/Badge'
 *  post:
 *    tags: [Comments]
 *    summary: Create a new badge
 *    produces:
 *      - application/json
 *    reponses:
 *      200:
 *        description: New badge created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Badge'
 */
badgeRouter
  .get('/', badgeController.index)
  .post('/', badgeController.create);
/**
 * @swagger
 * /api/v1/badge/{id}:
 *  get:
 *    tags: [Badges]
 *    summary: Get a badge by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the badge
 *    responses:
 *      200:
 *        description: Specific badge
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Badge'
 *  put:
 *    tags: [Badges]
 *    summary: Update a badge
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the badge
 *    responses:
 *      200:
 *        description: Updated badge
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Badge'
 *  delete:
 *    tags: [Badges]
 *    summary: Delete a badge
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the badge.
 *    responses:
 *      200:
 *        description: Removed a badge
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Removed badge with id
 */
badgeRouter
  .get('/:id', badgeController.show)
  .put('/:id', badgeController.update)
  .delete('/:id', badgeController.destroy);

export default badgeRouter;
