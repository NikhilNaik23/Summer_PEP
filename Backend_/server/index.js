const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Set-Cookie", "cookie=I am a cookie");
  if (req.url === "/"){
    if(req.method === "GET"){
         res.end("<h1>Hi from server's GET </h1>");
    }
    if(req.method === "POST"){
         res.end("<h1>Hi from server's POST </h1>");
    }
  }
  else if (req.url === "/about") res.end("<h1>Hi from About </h1>");
  else {
    res.end("<h1>Page not found </h1>");
  }
});

server.listen(3000, () => {
  log(`server is running at http://localhost:3000`);
});
