import test from 'ava';
import randomBoolean from './';

test('should return a random boolean', t => {
	t.is(typeof randomBoolean(), 'boolean');
	t.is(typeof randomBoolean({bias: 0.25}), 'boolean')
	t.end();
});
