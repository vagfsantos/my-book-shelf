import React from "react";
import BookImage from "./BookImage";
import { shallow } from "enzyme";

describe("<BookImage />", () => {
  describe("when the imgURL is a valid string", () => {
    test("renders the image properly", () => {
      const imgURL = "https://image.com/img.png";
      const imgDescription = "description";

      const component = shallow(
        <BookImage imageURL={imgURL} imageDescription={imgDescription} />
      );

      expect(
        component.find(`img[src='${imgURL}'][alt='${imgDescription}']`).length
      ).toEqual(1);
    });
  });

  describe("when the imgURL is invalid", () => {
    test("renders the image properly", () => {
      const imgURL = "";
      const imgDescription = "description";

      const component = shallow(
        <BookImage imageURL={imgURL} imageDescription={imgDescription} />
      );

      expect(component.find("img").prop("src").length).toBeGreaterThan(0);
    });
  });
});
