const { Router } = require('express');
const ChatController = require('../controllers/ChatController');
const SentMessageController = require('../controllers/SentMessageController');

const chatRoute = Router();

chatRoute.get('/', ChatController.index);
chatRoute.get('/show/:id', ChatController.show);
chatRoute.post('/', ChatController.store);
chatRoute.put('/:id', ChatController.update);
chatRoute.delete('/:id', ChatController.destroy);
chatRoute.patch('/sent/:id', SentMessageController.sent);
module.exports = chatRoute;
