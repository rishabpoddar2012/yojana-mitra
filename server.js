const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4030;

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading page');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/schemes.json') {
        fs.readFile(path.join(__dirname, 'schemes.json'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading data');
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(PORT, () => {
    console.log(`Yojana Mitra server running at http://localhost:${PORT}`);
});
