'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var userRoute = express.Router();
userRoute.post('/usuario/crear',UserController.createUser);
userRoute.get('/usuario/:id?', UserController.readUser);
userRoute.get('/usuarios', UserController.readUsers);
userRoute.put('/usuario/:id', UserController.updateUser);
userRoute.delete('/usuario/:id', UserController.deleteUser);
module.exports = userRoute;