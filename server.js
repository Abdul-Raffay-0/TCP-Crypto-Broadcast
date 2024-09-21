const net = require("net");

const server = net.createServer();

server.listen(3009, "127.0.0.1", () => {
  console.log("opened server on", server.address());
});

server.on("connection", (socket) => {
  console.log("New Connection Made");
});
