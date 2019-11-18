const express = require('express');

const router = express.Router();

const request_controller = require('../controllers/request.controller');


router.post('/create', request_controller.create);
router.get('/:id', request_controller.detail);
router.put('/:id/update', request_controller.update);
router.delete('/:id/delete', request_controller.delete);


module.exports = router;
