var express = require('express');
var bodyParser = require('body-parser');

var requireAuth = require('../users/middleware/auth');
var foo = require('./controllers');
var router = express.Router();

router.use(requireAuth);
router.use(bodyParser.json());

router
  .route('/')
  .get(foo.fetchAll)
  .post(foo.createOne);

router
  .route('/:id')
  .get(foo.fetchOne)
  .post(foo.updateOne)
  .delete(foo.deleteOne);

module.exports = router;
