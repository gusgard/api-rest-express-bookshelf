var request = require('supertest');

module.exports = {
  API: {
    before: () => {
      this.server = require('../src/server');
    },

    'should be listening': (done) => {
      request(this.server)
        .get('/')
        .expect(404, done);
    },

    'should return OK on GET /status': (done) => {
      request(this.server)
        .get('/status')
        .expect(200, 'OK')
        .end(err => {
          if (err) return done(err);
          done();
        });
    }
  }
};
