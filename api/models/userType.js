'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserTypeSchema = Schema({
    name: String
});

module.exports = mongoose.model('UserType',UserTypeSchema);