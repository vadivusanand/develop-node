var http = require('http');
var {URL} = require('url');

let itemArray = [
    {id: 101, name: "desktop", price: 70000, rating: 4},
    {id: 102, name: "cycle", price: 6500, rating: 4.7},
    {id: 103, name: "laptop", price: 90000, rating: 5},
]


const port = process.env.port || 9000;

var server = http.createServer(function (req, res) {
    if(req.url=="/items" && req.method=="GET"){
        console.log(req.url)
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(itemArray))
    } else if(req.url=="/firstItem" && req.method=="GET"){
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(itemArray[0]))
    }else if(req.url=="/saveItem" && req.method=="POST"){
        res.writeHead(200, { "Content-Type": "application/json" });
        var body = "";
        req.on("data", function (chunk) {
         body += chunk;
        });

        req.on("end", function () {
            console.log("body: "+body);
            itemArray.push({...JSON.parse(body), id: itemArray.length+1});
            res.end(JSON.stringify(itemArray));
        });

    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Something bad happend")
    }
})

server.listen(port, () => {
    console.log("App is running at " + port)
});