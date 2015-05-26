'use strict';

var path = require('path');
var skivvyFactory = require('skivvy-factory');

module.exports = skivvyFactory({
	description: 'Create a Skivvy task',
	template: path.join(__dirname, '../../templates/task'),
	placeholders: [
		{
			name: 'name',
			message: 'Task name',
			validate: function(value) {
				if (!value) { return 'Task name cannot be empty'; }
				return true;
			}
		},
		{
			name: 'description',
			message: 'Task description'
		}
	],
	options: {
		destination: '<%= package.paths.tasks %>',
		overwrite: '<%= package.overwrite %>'
	}
});
