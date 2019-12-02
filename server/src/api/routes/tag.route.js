import express from 'express';
import { TagController } from '../controllers';

const tagController = new TagController();

const tagRouter = express.Router();

tagRouter.get('/', tagController.index);
tagRouter.post('/create', tagController.create);
tagRouter.get('/:id', tagController.show);
tagRouter.put('/:id', tagController.update);
tagRouter.delete('/:id', tagController.destroy);

export default tagRouter;
