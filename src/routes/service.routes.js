const express = require('express');
const { createService, getServices, updateServiceById, deleteServiceById } = require('../controllers/service.controller');

const serviceRouter = express.Router();

serviceRouter.post('/', createService); // POST http://localhost:3000/api/services/
serviceRouter.get('/', getServices);
serviceRouter.put('/:id', updateServiceById);
serviceRouter.delete('/:id', deleteServiceById);

module.exports = serviceRouter;
