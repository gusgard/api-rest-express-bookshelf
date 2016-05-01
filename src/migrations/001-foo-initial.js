let tableName = 'foo';

exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable(tableName, (table) => {
      // ID.
      table.increments('id');

      // nickname.
      table.string('nickname', 128).unique().notNullable();

      // description.
      table.string('description', 1024);
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable(tableName)
  ]);
};
