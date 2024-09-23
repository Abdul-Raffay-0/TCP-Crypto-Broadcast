const net = require("net");
const process = require("process");
const readline = require("readline/promises");

// readline initiation
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//socket on the client side

const client = net.connect({ host: "127.0.0.1", port: 3009 }, async () => {
  console.log("Succesfully Connected to server");

  const message = await rl.question("Enter a message : \n");
  client.write(message);
});

client.on("data", (data) => {
  console.log(data.toString("utf-8"));
});
