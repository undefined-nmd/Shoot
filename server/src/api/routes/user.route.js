import express from 'express';
import { UserController } from '../controllers';

const userController = new UserController();

const userRouter = express.Router();
/**
 * @swagger
 * tags:
 *  name: Users
 *  description: User management
 */

/**
 * @swagger
 * 
 * /api/v1/user:
 *  get:
 *    tags: [Users]
 *    summary: Get all users.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: All users
 *        content:
 *          application/json:
 *            type: array
 *            schema:
 *              $ref: '#/components/schemas/User'
 *        
 *  post:
 *    tags: [Users]
 *    summary: Create a user.
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: New user created.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 */
userRouter.get('/', userController.index)
  .post('/', userController.create);
/**
 * @swagger
 * /api/v1/user/{id}:
 *  get:
 *    tags: [Users]
 *    summary: Get a user by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the user.
 *    responses:
 *      200:
 *        description: Specific user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *  put:
 *    tags: [Users]
 *    summary: Update a user
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the user.
 *    responses:
 *      200:
 *        description: Updated user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *  delete:
 *    tags: [Users]
 *    summary: Delete a user
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: numeric ID of the user.
 *    responses:
 *      200:
 *        description: Removed a user
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Removed user with id
 */
userRouter.get('/:id', userController.show)
  .put('/:id', userController.update)
  .delete('/:id', userController.destroy);

export default userRouter;
