import React from "react";
import { shallow } from "enzyme";

import BurgerMenu from "./BurgerMenu";

describe("<BurgerMenu />", () => {
  test("renders burger menu", () => {
    const component = shallow(<BurgerMenu clickHandler={() => {}} />);

    expect(component.find(".navbar-burger").length).toEqual(1);
  });

  test("triggers a callback when is clicked", () => {
    const clickHandler = jest.fn();

    const component = shallow(<BurgerMenu clickHandler={clickHandler} />);
    component.simulate("click");

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
