import express from 'express';
import { SubjectController } from '../controllers';

const subjectController = new SubjectController();

const subjectRouter = express.Router();

/**
 * @swagger
 * tags:
 *  name: Subjects
 *  description: Subject management
 */

/**
 * @swagger
 *
 * /api/v1/subject:
 *  get:
 *    tags: [Subjects]
 *    summary: Get all subjects.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: All subjects
 *        content:
 *          application/json:
 *            type: array
 *            schema:
 *              $ref: '#/components/schemas/Subject'
 *
 *  post:
 *    tags: [Subjects]
 *    summary: Create a subject.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: New subject created.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Subject'
 */
subjectRouter.get('/', subjectController.index)
  .post('/', subjectController.create);
/**
 * @swagger
 * /api/v1/subject/{id}:
 *  get:
 *    tags: [Subjects]
 *    summary: Get a subject by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the subject.
 *    responses:
 *      200:
 *        description: Specific subject
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Subject'
 *  put:
 *    tags: [Subjects]
 *    summary: Update a subject
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the subject.
 *    responses:
 *      200:
 *        description: Updated subject
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Subject'
 *  delete:
 *    tags: [Subjects]
 *    summary: Delete a subject
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the subject.
 *    responses:
 *      200:
 *        description: Removed a subject
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Removed subject with id
 */
subjectRouter.get('/:id', subjectController.show)
  .put('/:id', subjectController.update)
  .delete('/:id', subjectController.destroy);

export default subjectRouter;
