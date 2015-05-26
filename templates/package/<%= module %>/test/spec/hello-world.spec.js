'use strict';

var chai = require('chai');
var expect = chai.expect;

describe('task:hello-world', function() {
	var mockApi;
	var task;
	before(function() {
		mockApi = createMockApi();
		task = require('../../lib/tasks/hello-world');
	});

	function createMockApi() {
		return {
			errors: {
				TaskError: createCustomError('TaskError')
			}
		};

		function createCustomError(type) {
			function CustomError(message) {
				this.message = message;
			}

			CustomError.prototype = Object.create(Error.prototype);
			CustomError.prototype.name = type;

			return CustomError;
		}
	}

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
			task.call(mockApi, { user: 'world' });
		} finally {
			console.log = originalLog;
		}
		expect(logOutput).to.eql(['Hello, world!']);
	});
});
