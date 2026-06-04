export const parseList = (line) => {
	const listItemRegex = /^([-+]|\d+\.)\s+(.+)$/;
	const match = line.match(listItemRegex);
	const marker = match[1];
	const listType = /\d+\./.test(marker) ? 'ordered' : 'unordered';

	return {
		type: 'list',
		data: { listType, content: match[2] },
	};
};
