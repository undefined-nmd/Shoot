import express from 'express';
import { RoleController } from '../controllers';

const roleController = new RoleController();

const roleRouter = express.Router();
/**
 * @swagger
 * tags:
 *  name: Roles
 *  description: Role management
 */

/**
 * @swagger
 *
 * /api/v1/role:
 *  get:
 *    tags: [Roles]
 *    summary: Get all roles.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: All roles
 *        content:
 *          application/json:
 *            type: array
 *            schema:
 *              $ref: '#/components/schemas/Role'
 *
 *  post:
 *    tags: [Roles]
 *    summary: Create a role.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: New role created.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Role'
 */
roleRouter.get('/', roleController.index)
  .post('/', roleController.create);
/**
 * @swagger
 * /api/v1/role/{id}:
 *  get:
 *    tags: [Roles]
 *    summary: Get a role by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the role.
 *    responses:
 *      200:
 *        description: Specific role
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Role'
 *  put:
 *    tags: [Roles]
 *    summary: Update a role
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the role.
 *    responses:
 *      200:
 *        description: Updated role
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Role'
 *  delete:
 *    tags: [Roles]
 *    summary: Delete a role
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the role.
 *    responses:
 *      200:
 *        description: Removed a role
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Removed role with id
 */
roleRouter.get('/:id', roleController.show)
  .put('/:id', roleController.update)
  .delete('/:id', roleController.destroy);

export default roleRouter;
