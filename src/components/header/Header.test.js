import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";
import Brand from "./components/Brand";
import BurgerMenu from "./components/BurgerMenu";
import Menu from "./components/Menu";

describe("<Header />", () => {
  test("renders header properly", () => {
    const component = shallow(<Header />);

    expect(component.find(Brand).length).toEqual(1);
    expect(component.find(BurgerMenu).length).toEqual(1);
    expect(component.find(Menu).length).toEqual(1);
  });
});
