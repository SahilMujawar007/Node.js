const http = require('http');

let server = http.createServer((req, res) => {
    if (req.url == '/') {
       res.write('<h1> I Am Happy To Learn Full Stack Web Development From PW Skills!')
    }
    res.end();
})

server.listen(3010);
 
console.log('server is runing on port 3010');
