let http = require('http');

console.log('Attempting to start the Node.js echos server on port 8081..')
http.createServer().on('request', function(request, response){
 request.pipe(response);
}).on('close', function(){
    console.log('The Node.js echo server has been closed.')
})
.listen(8081);

console.log('Node.js echo server started on port 8081.')