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


## 🏗 Architecture

The parser operates as a two-stage pipeline to transform raw text into a
structured **Abstract Syntax Tree (AST)**. This separation allows for complex
multi-line logic and robust nesting support.

### 1. Lexical Analysis (The Lexer)

The Lexer performs **Linear Scanning**. It reads the input line-by-line and
assigns a "Token Type" based on regex rules.

- **Input:** Raw Markdown string.
- **Output:** A flat array of **Tokens**.

### 2. Syntactic Analysis (The Parser)

The Parser performs **Tree Construction**. It iterates through the tokens and
groups them into logical blocks (like merging multiple text lines into one
paragraph).

- **Input:** Array of Tokens.
- **Output:** A JSON **AST** (Abstract Syntax Tree).

---

## 🚀 Basic Features

The parser identifies and transforms core Markdown elements:

- **Paragraphs:** Detects and groups standard text blocks.
- **Headers:** Supports `#` through `######` (Levels 1–6).
- **Lists:** Handles both ordered (`1.`) and unordered (`-`, `*`, `+`) lists.
- **Blockquotes:** Captures quoted content indicated by `>`.

---

## 🛠 Implementation Boilerplate

### Step 1: The Lexer

```javascript
const example = `
# Project

This is a
cool parser.`;

const tokens = lexer(example);

// output: [
// { "type": "HEADER", "raw": "# Project" },
// { "type": "TEXT", "raw": "This is a" },
// { "type": "TEXT", "raw": "cool parser." }
// ]
```

### Step 2: The Parser

```javascript
const tokens = [
  { "type": "HEADER", "raw": "# Project" },
  { "type": "TEXT", "raw": "This is a" },
  { "type": "TEXT", "raw": "cool parser." },
];

const ast = parser(tokens)

// output:
// [
//   {
//     "type": "header",
//     "data": { "level": 1, "content": "Project" }
//   },
//   {
//     "type": "paragraph",
//     "data": { "text": "This is a cool parser." }
//   }
// ]
```
