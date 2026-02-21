import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { parseHeader } from "../src/parse_headings.js";

describe("tests for the parse header : ", () => {
  describe("for valid cases : ", () => {
    it("should give level as 1 and content as header ", () => {
      const line = "# heading";
      const actual = parseHeader(line);
      const expected = {
        type: "header",
        data: {
          level: 1,
          content: "heading",
        },
      };
      assertEquals(actual, expected);
    });

    it("should give level as 3 and content is [this is level3 heading]", () => {
      const line = "### this is level3 heading";
      const actual = parseHeader(line);
      const expected = {
        type: "header",
        data: {
          level: 3,
          content: "this is level3 heading",
        },
      };
      assertEquals(actual, expected);
    });

    it("should give level as 6 and content as #heading : ", () => {
      const line = "###### #heading";
      const actual = parseHeader(line);
      const expected = {
        type: "header",
        data: {
          level: 6,
          content: "#heading",
        },
      };
      assertEquals(actual , expected)
    });
  });
});
