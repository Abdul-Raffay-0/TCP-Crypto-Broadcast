const net = require("net");
const process = require("process");
const readline = require("readline/promises");

// readline initiation
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// client creates a socket
// connect on this server address
// because this is local host
//it will use the same address as the server when we check the client address

const client = net.createConnection({ host: "127.0.0.1", port: 3009 }, async () => {
  console.log("Succesfully Connected to server");

  const message = await rl.question("Enter a message : \n");
  client.write(message);
});

client.on("data", (data) => {
  console.log(data.toString("utf-8"));
});
