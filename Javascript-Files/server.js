const net = require("net");

//the following function emits a net.server object
const server = net.createServer();

// listen on this address
server.listen(3009, "127.0.0.1", () => {
  console.log("opened server on", server.address());
});

let socketList = [];
// emits a socket on connection of a client, so we can have comms
server.on("connection", (clientSocket) => {
  console.log("New Connection Made");
  socketList.push(clientSocket); // add to the list of current client connections,
                                //no current logic on what happens if a client drops

// take the msg from a client and forward it to all clients/sockets, 
// btw server also has a socket and i am logging the msg on the server side as well
  clientSocket.on("data", (data) => {
    console.log(data);
    socketList.map((s) => {
      s.write(data);
    });
  });
});

server.on("data", (data) => {
  console.log(data.to);
})