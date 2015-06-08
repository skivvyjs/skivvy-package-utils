'use strict';

var path = require('path');
var skivvyFactory = require('skivvy-factory');
var validateNpmPackageName = require('validate-npm-package-name');

module.exports = skivvyFactory({
	description: 'Create a Skivvy package',
	template: path.join(__dirname, '../../templates/package'),
	placeholders: [
		{
			name: 'scope',
			message: 'npm package scope',
			default: '@skivvy',
			validate: function(value) {
				var scopeName = parseScopeName(value);
				var results = validateNpmPackageName(scopeName.slice('@'.length));
				var isValidScopeName = results.validForNewPackages;
				if (!isValidScopeName) {
					var errors = (results.errors || []).concat(results.warnings || []);
					var message = 'Invalid scope name: ' + errors.join('; ');
					return message;
				}
				return true;
			}
		},
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
		var scopeName = parseScopeName(context.scope);
		var name = context.name;
		var packageName = (scopeName === '@skivvy' ? name : scopeName + '/' + name);
		context.scope = scopeName;
		context.name = packageName;
		context.module = scopeName + '/skivvy-package-' + name;
		return context;
	}
});


function parseScopeName(value) {
	if (value.charAt(0) !== '@') {
		value = '@' + value;
	}
	if (value.charAt(value.length - 1) === '/') {
		value = value.slice(0, -'/'.length);
	}
	return value;
}
