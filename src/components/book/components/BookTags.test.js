import React from "react";
import BookTags from "./BookTags";
import { shallow } from "enzyme";

describe("<BookTags />", () => {
  describe("when has no categories", () => {
    test("renders no child node", () => {
      const categories = [];

      const component = shallow(<BookTags categories={categories} />);

      expect(component.children().length).toEqual(0);
    });
  });

  describe("when has categories", () => {
    test("renders all in its own child node", () => {
      const categories = ["cat1", "cat2", "cat3"];

      const component = shallow(<BookTags categories={categories} />);

      expect(component.children().length).toEqual(3);
    });
  });
});
