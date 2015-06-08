'use strict';

module.exports = function(config) {
	console.log('Hello, ' + config.user + '!');
};

module.exports.defaults = {
	user: 'world'
};

module.exports.description = '<%= description %>';
