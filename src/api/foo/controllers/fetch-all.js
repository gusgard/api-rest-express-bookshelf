const FooModel = require('../models/foo');

module.exports = (req, res) => {
  FooModel
    .fetchAll()
    .then(foos => {
      let data = foos.map(foo =>
        ({
          id: foo.get('id'),
          nickname: foo.get('nickname'),
          description: foo.get('description'),
        })
      );

      res.json(data);
    });
};
