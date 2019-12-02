import express from 'express';
import { UserController } from '../controllers';

const userController = new UserController();

const userRouter = express.Router();

userRouter.get('/', userController.index);
userRouter.post('/create', userController.create);
userRouter.get('/:id', userController.show);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.destroy);

export default userRouter;
