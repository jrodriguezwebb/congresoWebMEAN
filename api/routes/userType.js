'use strict'

var express = require('express');
var UserTypeController = require('../controllers/userType');

var userTypeRoute = express.Router();
userTypeRoute.post('/tipo-usuario/crear',UserTypeController.createUserType);
userTypeRoute.get('/tipo-usuario/:id?', UserTypeController.readUserType);
userTypeRoute.get('/tipo-usuarios', UserTypeController.readUserTypes);
userTypeRoute.put('/tipo-usuario/:id', UserTypeController.updateUserType);
userTypeRoute.delete('/tipo-usuario/:id', UserTypeController.deleteUserType);
module.exports = userTypeRoute;