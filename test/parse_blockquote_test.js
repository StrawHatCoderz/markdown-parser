import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { parseBlockquote } from "../src/parse_blockquote.js";

describe("parseBlockquote", () => {
  it("=> should return paragraph when line is plain text ", () => {
    const line = "> this is paragraph";
    const actual = parseBlockquote(line);
    const expected = {
      type: "blockquote",
      data: {
        content: {
          "type": "paragraph",
          "data": { "text": "this is paragraph" },
        },
      },
    };
    
    assertEquals(actual, expected);
  });
  
  it("=> should return empty string when line has empty text", () => {
    const line = "> ";
    const actual = parseBlockquote(line);
    const expected = {
      type: "blockquote",
      data: {
        content: {
          "type": "paragraph",
          "data": { "text": "" },
        },
      },
    };

    assertEquals(actual, expected);
  });
  
  it("=> should return paragraph for zero spaces after >", () => {
    const line = ">this is paragraph";
    const actual = parseBlockquote(line);
    const expected = {
      type: "blockquote",
      data: {
        content: {
          "type": "paragraph",
          "data": { "text": "this is paragraph" },
        },
      },
    };

    assertEquals(actual, expected);
  });
  
  it("=> should return paragraph without spaces for multiple spaces after >", () => {
    const line = ">   this is paragraph";
    const actual = parseBlockquote(line);
    const expected = {
      type: "blockquote",
      data: {
        content: {
          "type": "paragraph",
          "data": { "text": "this is paragraph" },
        },
      },
    };

    assertEquals(actual, expected);
  });
});
