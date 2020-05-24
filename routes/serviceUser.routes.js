const { Router } = require('express');
const userService = require('../controllers/userService');

const rotinha = Router();

rotinha.get('/', userService.userService);

module.exports = rotinha;
