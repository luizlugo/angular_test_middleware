'use strict';
global.baseRouteSuffix = "/";
global._ = require('underscore');
global.Promise = require('bluebird');
global.moment = require('moment');
global.__base = __dirname + '/';
global.endpointURL = (process.env.NODE_ENV == "qa" || process.env.NODE_ENV == "dev" || !process.env.NODE_ENV) ? "http://localhost" : "http://localhost";

const Hapi = require('hapi');
const server = new Hapi.Server({});
var corsHeaders = require('hapi-cors-headers')
var fs = require("fs");
var config = {
	port : (process.env.NODE_ENV == "qa" || process.env.NODE_ENV == "prod")  ? 3001 : 3000,
};

/**
* API Routes Configuration
**/
server.connection(config);
// Register authentication method for jwt
server.register([],
	function (err) {
		server.route(require(__base + 'Routes/'));
		server.start(function () {
			console.log('Server running on: ' + server.info.uri);
		});

	}
);

server.ext('onPreResponse', corsHeaders);
