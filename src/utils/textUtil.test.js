import { textUtil } from "./textUtil";

describe("textUtil", () => {
  describe("getSummarizedText", () => {
    describe("when a quantity is not set", () => {
      test('returns a text with "..."', () => {
        const text = "text";

        const summarized = textUtil.getSummarizedText(text, undefined);

        expect(summarized).toEqual("text...");
      });
    });

    describe("when a text is not set", () => {
      test('returns "..."', () => {
        const summarized = textUtil.getSummarizedText();

        expect(summarized).toEqual("...");
      });
    });

    describe("when a text is set and the qtd is set", () => {
      test('returns the piece of text summarized + "..."', () => {
        const text = "text";

        const summarized = textUtil.getSummarizedText(text, 1);

        expect(summarized).toEqual("t...");
      });
    });
  });
});
