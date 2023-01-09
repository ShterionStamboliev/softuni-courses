const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'content-type': 'text/html'
    });

    switch (req.url) {
        case '/':
            res.write('<h1>Hello from nodeJS</h1>');
            break;
        case '/some-cats':
            res.write('Some cats here');
            break;
        case '/gato':
            res.write('El gato senor');
            break;
            default:
    }
    res.end();
});

server.listen(5000);