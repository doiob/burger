// Making an Express server available
var express = require('express');
var app = express();

// Adding in the components of the mysql library. Outlining the parameters tied to the mysql db
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'burgers_db'
});

// Connecting the mysql database mentioned above
connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});