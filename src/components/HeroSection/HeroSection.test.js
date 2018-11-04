import React from "react";
import { shallow } from "enzyme";

import HeroSection from "./HeroSection";

describe("<HeroSection />", () => {
  describe("renders the section properly", () => {
    test("when has no title", () => {
      const title = "title";

      const component = shallow(<HeroSection title={title} />);

      expect(component.find(".title").length).toEqual(1);
    });

    test("when has subtitle", () => {
      const subtitle = "subtitle";

      const component = shallow(<HeroSection subtitle={subtitle} />);

      expect(component.find(".subtitle").length).toEqual(1);
    });

    test("when has children", () => {
      const children = <p>children</p>;
      const component = shallow(<HeroSection>{children}</HeroSection>);

      expect(component.find(".container").children().length).toEqual(1);
    });

    test("when full height is true", () => {
      const isFullHeight = true;

      const component = shallow(<HeroSection isFullHeight={isFullHeight} />);

      expect(component.find(".is-fullheight").length).toEqual(1);
    });

    test("when size class is given", () => {
      const sizeClass = "sizeClass";

      const component = shallow(<HeroSection sizeClass={sizeClass} />);

      expect(component.find(".sizeClass").length).toEqual(1);
    });
  });
});
