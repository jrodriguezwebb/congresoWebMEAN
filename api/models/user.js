'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname: String,
    email: String,
    type: { type: Schema.ObjectId, ref: 'UserType'}
});

module.exports = mongoose.model('User',UserSchema);