import test from 'ava';
import fn from './';

test('title', t => {
	t.is(fn().get('plugins')[0], 'hyperterm-snazzy');
});
