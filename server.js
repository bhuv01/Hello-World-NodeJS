const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("ok\n");
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World from the GitOps + ArgoCD! First project Final 3 \n");
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
