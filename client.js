const net = require("net");

const client = net.connect({ host: "127.0.0.1", port: 3009 }, () => {
  console.log("Succesfully Connected to server");
});
