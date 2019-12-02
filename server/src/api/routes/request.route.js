import express from 'express';
import { RequestController } from '../controllers';

const requestController = new RequestController ;

const requestRouter = express.Router();

requestRouter.get('/', requestController.index);
requestRouter.post('/create', requestController.create);
requestRouter.get('/:id', requestController.show);
requestRouter.put('/:id', requestController.update);
requestRouter.delete('/:id', requestController.destroy);

export default requestRouter;
