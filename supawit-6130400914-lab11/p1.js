var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'))

app.get('/info', function(req, res) {
	res.render('info', {
	name: "Supawit Sippasuchon",
	url: "https://github.com/Supawitsip" ,
	urlMa: {name:'Mayaseven', link:'https://mayaseven.com/'},
	url1: {name:'AERO GROUP', link:'https://www.aerogroup1992.com/?fbclid=IwAR1bNGg39y_5LV-bdxX-wK-NAP2As85Hl0NwnQW6ckDqcXp2jUbqXGICet0'}
	});
});

app.listen(3000);