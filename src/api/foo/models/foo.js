var db = require('../../db');

/**
 * Foo Model.
 */
var Foo = db.Model.extend({
  tableName: 'foo'
});

module.exports = Foo;
