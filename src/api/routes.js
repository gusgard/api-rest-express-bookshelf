module.exports = (app) => {
  app.use('/status', require('./status/routes'));
  app.use('/foo', require('./foo/routes'));
};
