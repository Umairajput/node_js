const http = require("http")
const fs = require("fs")
const PORT = process.env.PORT || 3000;
const hostName = "localhost"
const home = fs.readFileSync("./index.html", "utf-8")
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        return res.end(home)
    } else if (req.url == "/about") {
        return res.end("<h1>This is about page</h1>")
    } else if (req.url == "/contact") {
        return res.end("<h1>This is contact page</h1>")
    } else {
        return res.end("<h1>Page Not Found</h1>")
    }
})
server.listen(PORT, hostName, () => {
    console.log(`server is working on http://${hostName}:${PORT}/`)
})