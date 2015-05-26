'use strict';

var path = require('path');
var skivvyFactory = require('skivvy-factory');
var validateNpmPackageName = require('validate-npm-package-name');

module.exports = skivvyFactory({
	description: 'Create a Skivvy package',
	template: path.join(__dirname, '../../templates/package'),
	placeholders: [
		{
			name: 'name',
			message: 'Skivvy package name',
			validate: function(value) {
				if (!value) { return 'Package name cannot be empty'; }
				var isScopedPackage = value.indexOf('/') !== -1;
				if (isScopedPackage && (value.charAt(0) !== '@')) {
					value = '@' + value;
				}
				var results = validateNpmPackageName(value);
				var isValidPackageName = results.validForNewPackages;
				if (!isValidPackageName) {
					var errors = (results.errors || []).concat(results.warnings || []);
					var message = 'Invalid package name: ' + errors.join('; ');
					return message;
				}
				return true;
			}
		},
		{
			name: 'description',
			message: 'Package description'
		},
		{
			name: 'author',
			message: 'Package author',
			default: '<%= project.author %>'
		},
		{
			name: 'license',
			message: 'Package license',
			default: '<%= project.license %>'
		}
	],
	options: {
		destination: '<%= package.paths.packages %>',
		overwrite: '<%= package.overwrite %>'
	},
	getContext: function(context) {
		var packageName = context.name;
		var isScopedPackage = packageName.indexOf('/') !== -1;
		if (isScopedPackage && (packageName.charAt(0) !== '@')) {
			packageName = '@' + packageName;
			context.name = packageName;
		}
		if (isScopedPackage && (packageName.indexOf('@skivvy/') === 0)) {
			packageName = packageName.substr('@skivvy/'.length);
			context.name = packageName;
			isScopedPackage = false;
		}
		context.module = isScopedPackage ? getScopedModuleName(packageName) : getGlobalModuleName(packageName);
		return context;

		function getScopedModuleName(packageName) {
			return packageName.split('/')[0] + '/skivvy-package-' + packageName.split('/').slice(1).join('/');
		}

		function getGlobalModuleName(packageName) {
			return '@skivvy/skivvy-package-' + packageName;
		}
	}
});
