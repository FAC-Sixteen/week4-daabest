const fs = require('fs');
const path = require('path');

function handler(request, response) {
    const endpoint = request.url;
    if (endpoint === "/") {
        fs.readFile(path.join(__dirname, "../public/index.html"), function (error, file) {
            if (error) {
                response.writeHead(500, {
                    'content-type': 'text/plain'
                });
                response.end('server error');
            } else {
                response.writeHead(200, {
                    'content-type': 'text/html'
                });
                response.end(file);
            }
        })
    }
}



module.exports = handler;