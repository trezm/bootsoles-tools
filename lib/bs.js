var model = require('./templates/model.js');
var controller = require('./templates/controller.js');
var fs = require('fs');
var utils = require('./utils');

var run = function(arguments) {
	var name = arguments[1];
	var type = arguments[2];
	arguments = arguments.splice(3)
	var fileName = arguments[0];

	var func = function() {};
	switch (type) {
		case 'model':
			func = model;
			fileName = "./app/models/" + fileName;
			break;
		case 'controller':
			func = controller;
			fileName = "./app/controllers/" + fileName + "_controller";
			break;
		default:
			console.error("Must include a model or controller");
	}

	writeFile(fileName + ".js", func.apply(null, arguments));
}

module.exports = run;

//run(arguments);