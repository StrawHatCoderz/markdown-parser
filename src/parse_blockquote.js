import { parseParagraph } from "./parse_paragraph.js";

export const parseBlockquote = (line) => {
  // assuming that line is plain text
  
  const regexp = /^>\s*(.*)/;
  const text = line.match(regexp)[1];
  
  const paragraphStructure = parseParagraph(text);

  return {
    type: "blockquote",
    data: {
      content: paragraphStructure,
    },
  };
};
