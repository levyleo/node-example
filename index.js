var restify = require('restify');
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

function user_log(req, res, next) {
	res.charSet('utf-8');
	res.contentType = 'json';
	res.send({
		's': '1',
		'us': userEntity
	});
}

server.get('/log', user_log);

server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});