const express = require('express');
const app = express();

const execPHP = require('./execphp.js')();

app.use('*.php',function(request, response, next) {

	execPHP.parseFile(request.originalUrl, ( phpResult ) => {
		response.write(phpResult);
		response.end();
	});
});

app.listen(3000, function () {
	console.log('Node server listening on port 3000!');
});