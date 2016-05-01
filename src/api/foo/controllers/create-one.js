const FooModel = require('../models/foo');

module.exports = (req, res) => {
  let foo = new FooModel({
    nickname: req.body.nickname,
    description: req.body.description,
  });

  foo
    .save()
    .then(fooData => res.status(201).json(fooData));
};
