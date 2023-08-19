const http = require("node:http");
const fs = require("node:fs");
const server = http.createServer((req, res) => {
    const name = "Rekha"
    res.writeHead(200, {"Content-Type" : "text/html"});
    // let html = fs.createReadStream("./index-1.html").pipe(res);
    let html = fs.readFileSync("./index-1.html", "utf-8");
    html = html.replace("{{name}}", name);
    res.end(html);
});

server.listen(3000, ()=> {
    console.log("Server running on port 3000");
})