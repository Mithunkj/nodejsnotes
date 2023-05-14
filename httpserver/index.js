//server create
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello from the other side mithun kj");
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("listenig to the port no 8000");
// });

//8000 port number, 127.0.0.1 is localhost

//handaling http requests
// const http = require("http");

// const server = http.createServer((req, res) => {
//   //console.log(req.url);
//   if (req.url == "/") {
//     res.end("Hello from the Home side");
//   } else if (req.url == "/aboutus") {
//     res.end("hello from About us side");
//   } else if (req.url == "/contact") {
//     res.end("hello from Contact us side");
//   } else {
//     res.writeHead(404, { "Content-type": "text/html" });
//     res.end("<h1>404 error pages,Page doesn't exist<h1>");
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("listenig to the port no 8000");
// });

// //create simple api 18th video always refres the browser
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   //console.log(req.url);
//   if (req.url == "/") {
//     res.end("Hello from the Home side");
//   } else if (req.url == "/aboutus") {
//     res.end("hello from About us side");
//   } else if (req.url == "/contact") {
//     res.end("hello from Contact us side");
//   } else if (req.url == "/userapi") {
//     fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
//       console.log(data);
//       const objData = JSON.parse(data);
//       res.end(objData[0].name);
//     });
//   } else {
//     res.writeHead(404, { "Content-type": "text/html" });
//     res.end("<h1>404 error pages,Page doesn't exist<h1>");
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("listenig to the port no 8000");
// });

//create simple api 18th video once load the data
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //console.log(req.url);

  const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
  const objData = JSON.parse(data);

  if (req.url == "/") {
    res.end("Hello from the Home side");
  } else if (req.url == "/aboutus") {
    res.end("hello from About us side");
  } else if (req.url == "/contact") {
    res.end("hello from Contact us side");
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(objData[6].name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 error pages,Page doesn't exist<h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listenig to the port no 8000");
});
