const { Router } = require('express');
const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');

const userRoute = Router();

userRoute.get('/', UserController.index);
userRoute.get('/show/:id', UserController.show);
userRoute.post('/', UserController.store);
userRoute.put('/:id', UserController.update);
userRoute.delete('/:id', UserController.destroy);
userRoute.post('/login', LoginController.login);

module.exports = userRoute;
