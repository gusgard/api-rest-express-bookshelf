var testEnv = process.env.NODE_ENV === 'test';
/**
 * Database configuration file.
 *
 * Contains all data related to the connection to the database.
 */
exports = module.exports = {
  /**
   * The type of database to be used.
   *
   * Default value: postgres.
   */
  client: 'postgresql',

  /**
   * The IP on which the database server is running.
   *
   * Default value: localhost.
   */
  host: 'localhost',

  /**
   * The port on which the database server is running.
   *
   * Default value: 5432 (posgres).
   */
  port: 5432,

  connection: {
    /**
     * The name of the database.
     */
    database: testEnv ? 'express_api_test' :
                        'express_api',
    /**
     * The name of the database user.
     *
     * Default value: postgres.
     */
    user: 'postgres',

    /**
     * The password for the database user.
     *
     * Default value: postgres.
     */
    password: 'postgres'
  },

  migrations: {
    tableName: 'knex_migrations',
    directory: 'src/migrations/'
  }
};
