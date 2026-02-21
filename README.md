# 📝 markdown-parser

A lightweight, modular Markdown-to-JSON parser built with JavaScript. This tool
transforms raw Markdown strings into structured objects, making it easy to
render content across different platforms.

---

## Basci Features

The parser identifies and transforms core Markdown elements into predictable
data structures:

- **Paragraphs:** Detects standard text blocks.
- **Headers:** Supports `#` through `######` (Levels 1–6).
- **Lists:** Handles both ordered (`1.`) and unordered (`-`, `*`, `+`) lists.
- **Blockquotes:** Captures quoted content indicated by `>`.

---

## APIs

### `parseParagraph(content)`

Converts a raw string into a paragraph object.

- **Returns:** `{ type: 'paragraph', data: { text: string } }`

### `parseHeader(line)`

Identifies the header level and extracts the inner text.

- **Returns:** `{ type: 'header', data: { level: number, content: string } }`

### `parseList(lines)`

Processes an array of lines into a structured list.

- **Returns:** ```javascript { type: 'list', data: { style: 'ordered' |
  'unordered', items: [ "item 1", "item 2" ] } }
  ```
  ```

### `parseBlockquote(content)`

Extracts content from Markdown quote syntax.

- **Returns:** `{ type: 'blockquote', data: { content: string } }`

---

## Example

```js
const rawMarkdown = "# Hello World";
const result = parseHeader(rawMarkdown);

console.log(result);
// Output: { type: 'header', data: { level: 1, content: 'Hello World' } }
```
