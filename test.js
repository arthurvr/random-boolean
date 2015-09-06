'use strict';
var test = require('ava');
var randomBoolean = require('./');

test('should return a random boolean', function (t) {
	t.is(typeof randomBoolean(), 'boolean');
	t.end();
});
