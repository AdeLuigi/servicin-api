const { Router } = require('express');
const ServiceController = require('../controllers/ServiceController');
const SearchServiceController = require('../controllers/SearchLocationController');

const servicesRoute = Router();

servicesRoute.get('/', ServiceController.index);
servicesRoute.get('/show/:id', ServiceController.show);
servicesRoute.post('/', ServiceController.store);
servicesRoute.put('/:id', ServiceController.update);
servicesRoute.delete('/:id', ServiceController.destroy);
servicesRoute.get('/search', SearchServiceController.searchServicesFromLocation);

module.exports = servicesRoute;
