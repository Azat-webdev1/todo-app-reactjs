const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/assets/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3003;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log("Running server");
});