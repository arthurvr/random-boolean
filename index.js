'use strict';
module.exports = function (options) {
	return Math.random() >= 1 - ((options && options.bias) || 0.5);
};
