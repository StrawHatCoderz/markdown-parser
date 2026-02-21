import { assertEquals } from '@std/assert';
import { describe, it } from '@std/testing/bdd';
import { parseParagraph } from '../src/parse_paragraph.js';

describe('parseParagraph', () => {
	it('should return the paragraph data structure', () => {
		const line = 'this is a paragraph';
		const result = parseParagraph(line);

		assertEquals(result.type, 'paragraph');
	});

	it('should return paragraph for empty line', () => {
		const line = '';
		const result = parseParagraph(line);

		assertEquals(result.type, 'paragraph');
	});

	it('should return paragraph for invalid markdown syntax', () => {
		const line = '#this is invalid header';
		const result = parseParagraph(line);

		assertEquals(result.type, 'paragraph');
	});
});
