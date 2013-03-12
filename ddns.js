#!/usr/bin/env node

var params = {
	login_email: '***',
	login_password: '***',
	format: 'json',
	domain_id: ***,
	record_id: ***,
	sub_domain: '***',
	record_line: '默认',
}; 

var request = require('https').request;
var stringify = require('querystring').stringify;

var data = stringify(params);
var headers = {
	'User-Agent': 'dnspod-ddns-node-lite/20130217(fairplay1986@gmail.com)',
	'Content-Type': 'application/x-www-form-urlencoded',
	'Content-Length': data.length,
};
var options = {
	host: 'dnsapi.cn',
	method: 'POST',
	path: '/Record.Ddns',
	headers: headers,
}

var req = request(options, function (res) {
	console.log(res.statusCode);
	res.on('data', function (data) {
		console.log(data.toString());
	});
});
req.end(data);
