var express = require('express');
var router = express.Router();

router
  .route('/')
  .get(require('./controllers/status'));

module.exports = router;
