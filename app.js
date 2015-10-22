"use strict";

let http = require('http');
let config = require('./config.json');
let server = http.createServer();

let control = function (petic, resp) {
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('\nHola, Mundo!\n ' + config.author + '\n\n');
    resp.end();
};

server.on('request', control);
server.listen(config.port);