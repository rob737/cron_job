/**
 * This is the starting point of project.
 * This is where project actually starts it's execution from.
 * 1. API to trigger start of cron job
 * 2. API to stop cron job altogether
 */

/**
 * Implementation specifics :
 * 1. we need server to host our code
 * 2. Understand how connections are being made
 * 3. Understand how request is being parsed and understood
 * 4. Understand how response is being transferred and received by the client
 */

// figure out how require actually works
const http = require("http");
const { host, port } = require("./constant/startup_configurations");

// it should create a process to listen to request

const server = http.createServer((argReq, argRes) => {
  console.log(argReq);
  argRes.end(JSON.stringify({ data: "Ok" }));
});

server.listen(port, host);
// it should parse request

// it should return response
