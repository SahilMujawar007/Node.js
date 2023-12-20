const fs = require('fs');

let info = 'Node.js is a JavaScript-based platform that is mainly used to create I/O-intensive web applications such as chat apps, multimedia streaming sites, etc. It is built on Google Chrome’s V8 JavaScript engine. A web application is software that runs on a server and is rendered by a client browser that accesses all of the application’s resources through the internet.'

fs.writeFile('nodejs_architecture.txt', info, function(err){
       if(err){
         console.log(err);
       } else {
         console.log(info)
       }

})

fs.readFile('nodejs_architecture.txt', function(err, data){
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})

let addData = 'Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks.Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally,it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.'

fs.appendFile('nodejs_architecture.txt', addData, 'utf8', function(err){
    if(err){
        console.log(err);
    } else {
        console.log(addData);
    }
})

fs.unlink('nodejs_architecture.txt', function(err){
    if(err){
        console.log(err);
    }

    console.log('File Deleted SuccessFully');
    
})