"use strict";

let http = require('http');
let server = http.createServer();

let control = function (petic, resp) {
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('\nHola, Mundo!\n by Alberto Iglesias Gallego\n\n');
    resp.end();
};

server.on('request', control);
server.listen(8080);