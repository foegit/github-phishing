const route = require('express').Router();
const dataController = require('../controllers/data');

route.post('/', dataController.handleData);

module.exports = route;
