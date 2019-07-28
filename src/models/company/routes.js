const controller = require('./controller');
const express = require('express');
const routes = express.Router();

routes.post('/create', controller.createComp);
routes.get('/get', controller.getAll);

module.exports = routes;