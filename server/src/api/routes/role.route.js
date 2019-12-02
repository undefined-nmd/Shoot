import express from 'express';
import { RoleController } from '../controllers';

const roleController = new RoleController();

const roleRouter = express.Router();

roleRouter.get('/', roleController.index);
roleRouter.post('/create', roleController.create);
roleRouter.get('/:id', roleController.show);
roleRouter.put('/:id', roleController.update);
roleRouter.delete('/:id', roleController.destroy);

export default roleRouter;
