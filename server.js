var http = require("http");
var url = require("url");

//start - Start server, "router" for router function
exports.start = function(router, handle) {
    function onRequest(request, response) {
        let szPath = url.parse(request.url).pathname;
        router(handle, szPath, response);
    }

    g_Server =  http.createServer(onRequest);
    g_Server.listen(8888);
}