const fs = require('fs');
const path = require('path');

function handler(request, response) {
    const endpoint = request.url;
    const extensionType = {
        html: "text/html",
        css: "text/css",
        js: "application/javascript",
        jpg: "image/jpg",
        png: "image/png",
        ico: "image/x-icon"
    };

        
        fs.readFile(path.join(__dirname, "../public/"), function (error, file) {
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



module.exports = handler;