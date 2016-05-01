const FooModel = require('../models/foo');

module.exports = (req, res) => {
  FooModel
    .query({ where: { id: req.params.id }})
    .destroy({ require: true })
    .then(res.json({ message: 'OK'}))
    .catch(err => {
      if (err) {
        res.status(404).json({ message: err.message });
      }
    });
};
