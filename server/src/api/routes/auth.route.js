import express from 'express';
import { UserController } from '../controllers';

const userController = new UserController();

const authRouter = express.Router();
/**
 * @swagger
 * tags:
 *  name: Users
 *  description: User management
 */

/**
 * @swagger
 *
 * /api/v1/auth/create:
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
authRouter.post('/create', userController.create);
/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *    tags: [Users]
 *    summary: Login
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: logged in successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 */
authRouter.post('/login', userController.login);


export default authRouter;
