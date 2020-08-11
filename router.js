var fs = require("fs")
var path = require("path")

var g_FileDirectory = "files"

exports.route = function(handle, szPath, response) {
    if (typeof handle[szPath] === 'function') {
        console.log("Routed " + szPath);
        handle[szPath](response);
    } else {
        //look for local static file
        fs.readFile(path.join(g_FileDirectory, szPath.substring(1)), "utf-8", function onReturn(error, data) {
            if(!error) {
                response.statusCode = 200;
                response.setHeader("Content-Type", "text/html");
                response.write(data);
                response.end();
            } else {
                //404
                console.log("No request handler found for " + szPath);
                response.statusCode = 404;
                response.setHeader("Content-Type", "text");
                response.write("404 not found.");
                response.end();
            }
        })
    }
}