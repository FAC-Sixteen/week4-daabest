const fs = require('fs');
const path = require('path');
const plants = require('./plants.json');
// const queryString = require('query-string');

function handler(request, response) {
    const url = request.url;
    const extension = url.split('.')[1];
    const extensionType = {
        html: "text/html",
        css: "text/css",
        js: "application/javascript",
        js: "text/javascript",
        jpg: "image/jpg",
        png: "image/png",
        ico: "image/x-icon"
    };

    if (url === "/") {
        const filePath = path.join(__dirname + '/..' + "/public" + "/index.html")
        fs.readFile(filePath, function (error, file) {
            if (error) {
                response.write("Sorry, there was a problem on our end.");
                return;
            }
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.end(file);
        });


        

    } else if (url.includes("query")) {
        console.log(plants);
        // const plantsObj = JSON.parse(plants);
        // let plantArr = [];
        // const searchString = queryString.parse(request.url)[]
        




    } else {
        const filePath = path.join(__dirname + '/..' + "/public") + url
        fs.readFile(filePath, function (error, file) {
            if (error) {
                response.write("Sorry, there was a problem on our end.");
                return;
            }
            response.writeHead(200, {
                "Content-Type": extensionType[extension]
            });
            response.end(file);
        });
    }

}

module.exports = handler;