const http = require('http');
const fs = require('fs').promises;
const host = 'localhost';
const port = 3031;

const requestLis = function (req, res) {
    // res.end("Hello world, this is my first web server using NodeJS
	fs.readFile(__dirname + "/index.html")
	.then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
};

const server = http.createServer(requestLis);

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});

