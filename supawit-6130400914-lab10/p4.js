
let request = require("request");
request.get("https://krunapon.github.io/google/call-kk-restaurants.json", (error, response, body) => {
    if (error) {
        return console.dir(error);
    }
    let result = JSON.parse(body);
    let text = "";
    let i = 1;
    for (let place of result.results) {
        text += i + ". " + place.name + "<br>";
        i++ ;
    }
    const http = require('http');
    const port = 8000;
    const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<head>');
        res.write('<meta charset="utf-8"');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Restaurants in Khon Kaen</h1>');
        res.write(`<ol>${text}</ol>`);
        res.write('</body>');
        res.write('</html>');
        res.end();
    })
    server.listen(port, () => {
        console.log(`Server running at port ${port}`)
    })
});

