const FooModel = require('../models/foo');

module.exports = (req, res) => {
  FooModel
    .where({ id: req.params.id })
    .fetch()
    .then(foo => {
      return foo
        .set('description', req.body.description)
        .save();
    })
    .then(data => res.status(200).json(data))
    .catch(err => {
      if (err) {
        res.status(400).json({ error: err });
      }
    });
};
