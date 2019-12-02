import express from 'express'
import { SubjectController } from '../controllers'

const subjectController = new SubjectController

const subjectRouter = express.Router()

subjectRouter.get('/', subjectController.index)
subjectRouter.post('/create', subjectController.create)
subjectRouter.get('/:id', subjectController.show)
subjectRouter.put('/:id', subjectController.update)
subjectRouter.delete('/:id', subjectController.destroy)

export default subjectRouter