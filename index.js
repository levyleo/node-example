var restify = require('restify'),
	async = require('async');

function userInfo(names, callback) {

	var client = restify.createJsonClient({
		url: 'http://192.168.10.18',
		headers: {}
	});
	var name = '';
	for (var i = names.length - 1; i >= 0; i--) {
		name = name + 'names[]=' + encodeURIComponent(names[i]) + '&';
	}
	if (name != '') {
		name = '?' + name;
	}
	console.log(name);

	client.get('/api/users/avatars' + name, function(err, req_, res_, obj) {
		if (err) {
			callback(err);
		} else {
			callback(null, obj);
		}
	});
}

async.parallel({
	userInfo1: function(callback) {
		userInfo(['levy'],callback);
	},
	userInfo2: function(callback) {
		userInfo(['levy'],callback);
	}
}, function(err, result) {
	console.error(err);
	console.log(result);
});
