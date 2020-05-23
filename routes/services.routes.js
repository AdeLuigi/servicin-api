const { Router } = require('express');
const ServiceController = require('../controllers/ServiceController');

const servicesRoute = Router();

servicesRoute.get('/', ServiceController.index);
servicesRoute.get('/show/:id', ServiceController.show);
servicesRoute.post('/', ServiceController.store);
servicesRoute.put('/:id', ServiceController.update);
servicesRoute.delete('/:id', ServiceController.destroy);

module.exports = servicesRoute;
