const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const dbConfig = require('./config/database');
const knex = require('knex')(dbConfig);

gulp.task('nodemon', () => {
  nodemon({ script: 'src/app.js' })
    .on('start', () => {
    })
    .on('restart', () => {
    });
});

gulp.task('db:migrate', done => {
  knex.migrate
    .latest()
    .then(() => done())
    .catch((err) => done(err))
    .finally(() => knex.destroy());
});

gulp.task('db:rollback', done => {
  knex.migrate
    .rollback()
    .then(() => done())
    .catch((err) => done(err))
    .finally(() => knex.destroy());
});
