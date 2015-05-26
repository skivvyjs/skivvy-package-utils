'use strict';

exports.tasks = {
	'create-task': require('./lib/tasks/create-task'),
	'create-package': require('./lib/tasks/create-package')
};

exports.defaults = {
	paths: {
		tasks: 'skivvy_tasks',
		packages: 'node_modules'
	},
	overwrite: false
};
