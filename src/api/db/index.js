var dbConfig = require('../../../config').db;
var connection = require('knex')(dbConfig);

module.exports = require('bookshelf')(connection);
