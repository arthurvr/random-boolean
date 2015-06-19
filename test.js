'use strict';
var assert = require('assert');
var randomBoolean = require('./');

it('should return a random boolean', function () {
	assert.strictEqual(typeof randomBoolean(), 'boolean');
});
