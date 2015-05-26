'use strict';

module.exports = function(config) {
	console.log('Hello, ' + config.user + '!');
};

module.exports.defaults = {
	user: '<%= "<" + "%" + "=" + " package.user " + "%" + ">" %>'
};

module.exports.description = 'Example task';
