const FooModel = require('../models/foo');

module.exports = (req, res) => {
  let fooContext = new FooModel({ id: req.params.id });

  fooContext
    .fetch()
    .then(foo => {
      if (foo) {
        let response = {
          id: foo.get('id'),
          nickname: foo.get('nickname'),
          description: foo.get('description'),
        };
        res.json(response);
      } else {
        res.status(404).json({}) ;
      }
    })
    .catch(err => {
      if (err) {
        res.status(500).json({ error: err });
      }
    });
};
