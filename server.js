const http = require("http");

const server = http.createServer((req, res) => {
  console.log("run request...");
  res.setHeader("Content-Type", "text/html");
  res.write("<h3>Hello world!</h3>");
  res.write("<h2>From Eric & BLUE PUDDING </h2>");
  res.end();
});
