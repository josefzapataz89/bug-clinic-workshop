'use strict'

const http = require('http');
const trace = require('jstrace');

const PORT = 9999;

http.createServer((request, res) => {
        trace("request:start", {
            url: request.url
        });

        let status;
        let body;

        if (request.method === 'GET' && request.url === '/prognosis') {
            status = 200;
            body = {
                ok: true
            };
        }   
        else {
            status = 404;
            body = {
                error: "notfound"
            };
        }

        res.setHeader("content-type", "application/json");
        res.writeHead(status);
        res.send(JSON.stringify(body));

        trace("request:end", {
            statusCode: status,
            body
        });
    })
    .listen(PORT, () => {
        console.log("up")
    })