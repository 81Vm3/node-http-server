var fs = require("fs")

exports.homepage = function(response) {
    respondHTMLFile(response, "index.html");
}

exports.upload = function(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

function respondHTMLFile(response, fileName) {
    fs.readFile(fileName, "utf-8", function onReturn(error, data) {
        if(!error) {
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/html");
            response.write(data);
            response.end();
        }
    })
}