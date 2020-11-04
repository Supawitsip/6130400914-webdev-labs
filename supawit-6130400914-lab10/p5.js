let request = require("request");
let express = require('express');
let app = express();

request.get("https://httpbin.org/ip", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    let result = JSON.parse(body);
    let ip = result.origin;
    console.log(result);
    
   
    app.get('/ip', function(req, res) {
        res.send({ip});
    });
    app.post('/ip', function(req, res) {
	res.send("Your request with POST method but cannot set up IP address\n");
    });

    app.listen(3000);
    
});




