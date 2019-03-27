const fs = require('fs');

function handler(request, response){
    let endpoint = request.url;
    console.log(endpoint);

    let method = request.method;
    console.log(method);
    // if(endpoint == '/abc'){
    //     response.writeHead(200, {"Content-Type": "text/html"});
    //     response.write('Yoo');
    //     response.end();

    // }
    // else{


    // checking to see if server up and running!!!
response.writeHead(200, {"Content-Type": "text/html"});
response.write("I am working");
response.end();
// }

}



module.exports = handler;