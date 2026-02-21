import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import { parseImageHandler } from "../src/to_image.js";

describe("tests for parse image handler", () => {
  it("=> should return alt, href when user provided both", () => {
    const line = "![figure caption for screen readers](example.png)";
    const expectedImageNode = {
      type: "image",
      data: { alt: "figure caption for screen readers", href: "example.png" },
    };
    const actualImageNode = parseImageHandler(line);
    assertEquals(expectedImageNode.type, actualImageNode.type);
    assertEquals(expectedImageNode.alt, actualImageNode.alt);
    assertEquals(expectedImageNode.href, actualImageNode.href);
    assertEquals(actualImageNode, expectedImageNode);
  });

  it("=> should return href when user provides only href", () => {
    const line = "![](example.png)";
    const expectedImageNode = {
      type: "image",
      data: { alt: "", href: "example.png" },
    };
    const actualImageNode = parseImageHandler(line);
    assertEquals(expectedImageNode.type, actualImageNode.type);
    assertEquals(expectedImageNode.alt, actualImageNode.alt);
    assertEquals(expectedImageNode.href, actualImageNode.href);
    assertEquals(actualImageNode, expectedImageNode);
  });

  it("=> should return alt when user provides only alt", () => {
    const line = "![figure caption for screen readers]()";
    const expectedImageNode = {
      type: "image",
      data: { alt: "figure caption for screen readers", href: "" },
    };
    const actualImageNode = parseImageHandler(line);
    assertEquals(expectedImageNode.type, actualImageNode.type);
    assertEquals(expectedImageNode.alt, actualImageNode.alt);
    assertEquals(expectedImageNode.href, actualImageNode.href);
    assertEquals(actualImageNode, expectedImageNode);
  });

  it("=> should return alt, href when user provides both alt, href even source is not valid", () => {
    const line = "![figure caption for screen readers](figure source)";
    const expectedImageNode = {
      type: "image",
      data: { alt: "figure caption for screen readers", href: "figure source" },
    };
    const actualImageNode = parseImageHandler(line);
    assertEquals(expectedImageNode.type, actualImageNode.type);
    assertEquals(expectedImageNode.alt, actualImageNode.alt);
    assertEquals(expectedImageNode.href, actualImageNode.href);
    assertEquals(actualImageNode, expectedImageNode);
  });

});
