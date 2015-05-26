'use strict';

var chai = require('chai');
var expect = chai.expect;

var task = require('../../lib/tasks/hello-world');

describe('hello-world', function() {

	it('should have a description', function() {
		expect(task.description).to.be.a('string');
	});

	it('should specify default configuration', function() {
		expect(task.defaults).to.eql({
			user: '<%= "<" + "%" + "=" + " package.user " + "%" + ">" %>'
		});
	});

	it('should greet the user', function() {
		var originalLog = console.log;
		var logOutput = [];
		console.log = function mock(string) {
			logOutput.push(string);
		};
		try {
			task({ user: 'world' });
		} finally {
			console.log = originalLog;
		}
		expect(logOutput).to.eql(['Hello, world!']);
	});
});
