import { assertEquals } from '@std/assert';
import { describe, it } from '@std/testing/bdd';
import { parseList } from '../src/parse_list.js';

describe('parseList', () => {
	it(" => should return the list structure with '-' as list symbol", () => {
		const line = '- this is a list';
		const result = parseList(line);

		assertEquals(result.type, 'list');
		assertEquals(result.data.listType, 'unordered');
	});

	it(" => should return the list structure with '+' as list symbol", () => {
		const line = '+ this is a list';
		const result = parseList(line);

		assertEquals(result.type, 'list');
		assertEquals(result.data.listType, 'unordered');
	});

	it(' => should return ordered list with number as list symbol', () => {
		const line = '1. this is a list';
		const result = parseList(line);

		assertEquals(result.type, 'list');
		assertEquals(result.data.listType, 'ordered');
	});
});
