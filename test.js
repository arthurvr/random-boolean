import test from 'ava';
import randomBoolean from './';

test('should return a random boolean', t => {
	t.is(typeof randomBoolean(), 'boolean');
	t.end();
});
