const net = require("net");

const server = net.createServer();

server.listen(3009, "127.0.0.1", () => {
  console.log("opened server on", server.address());
});

let socketList = [];

server.on("connection", (clientSocket) => {
  console.log("New Connection Made");
  socketList.push(clientSocket);

  clientSocket.on("data", (data) => {
    socketList.map((s) => {
      s.write(data);
    });
  });
});
