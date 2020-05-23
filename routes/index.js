const { Router, json } = require('express');
const serviceRoutes = require('./services.routes');
const userRoutes = require('./user.routes');
const chatRoutes = require('./chat.routes');

const routes = Router();
routes.use(json());

routes.use('/service', serviceRoutes);
routes.use('/user', userRoutes);
routes.use('/chat', chatRoutes);


/* routes.use('/user', userRoutes);
routes.use('/chat', chatRoutes); */


module.exports = routes;
