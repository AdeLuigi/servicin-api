const { Router } = require('express');
const userService = require('../controllers/userService');

const rotinha = Router();

rotinha.post('/', userService.rotinha);

module.exports = rotinha;
