import express from 'express';
import { LiveRequestController } from '../controllers';

const liveRequestController = new LiveRequestController;
const liveRequestRouter = express.Router();

/**
 * Create all routes
 */
liveRequestRouter.get('/', liveRequestController.index);
liveRequestRouter.post('/', liveRequestController.create);
liveRequestRouter.get('/:id', liveRequestController.show);
liveRequestRouter.put('/:id', liveRequestController.update);
liveRequestRouter.delete('/:id', liveRequestController.destroy);

export default liveRequestRouter;