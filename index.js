var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {
    "/" : requestHandlers.homepage,
    "/home" : requestHandlers.homepage,
    "/upload" : requestHandlers.upload
};

server.start(router.route, handle);