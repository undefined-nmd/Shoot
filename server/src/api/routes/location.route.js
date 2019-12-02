import express from 'express';
import { LocationController } from '../controllers';

const locationController = new LocationController();

const locationRouter = express.Router();

locationRouter.get('/', locationController.index);
locationRouter.post('/create', locationController.create);
locationRouter.get('/:id', locationController.show);
locationRouter.put('/:id', locationController.update);
locationRouter.delete('/:id', locationController.destroy);

export default locationRouter;
