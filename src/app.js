let server = require('./server');
let port = 3000;

server.listen(port, () => {
  console.log(`✔ Express server listening on port ${port}`);
});
