const { Router } = require('express');
const ServiceController = require('../controllers/ServiceController');
const SearchServiceController = require('../controllers/SearchLocationController');
const userService = require('../controllers/userService');

const servicesRoute = Router();

servicesRoute.get('/', ServiceController.index);
servicesRoute.get('/show/:id', ServiceController.show);
servicesRoute.post('/', ServiceController.store);
servicesRoute.put('/:id', ServiceController.update);
servicesRoute.delete('/:id', ServiceController.destroy);
servicesRoute.get('/search', SearchServiceController.searchServicesFromLocation);
servicesRoute.get('/userService/', userService.rotinha);

module.exports = servicesRoute;
