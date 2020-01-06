import express from 'express';
import { VoteController } from '../controllers';

const voteController = new VoteController();

const voteRouter = express.Router();

voteRouter.get('/', voteController.index)
  .post('/', voteController.create);

voteRouter.get('/:id', voteController.show)
  .put('/:id', voteController.update)
  .delete('/:id', voteController.destroy);

export default voteRouter;
