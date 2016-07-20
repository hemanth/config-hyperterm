import test from 'ava';
import fn from './';

test('title', t => {
	t.is(fn('./hyperterm.mock.js').get('plugins')[0], 'hyperterm-snazzy');
});
