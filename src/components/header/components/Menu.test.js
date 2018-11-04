import React from "react";
import { shallow } from "enzyme";
import { NavLink } from "react-router-dom";

import Menu from "./Menu";

const menuItems = [
  {
    link: "link",
    name: "linkName"
  },
  {
    link: "link",
    name: "linkName"
  }
];

describe("<Menu />", () => {
  describe("when menuItems is empty", () => {
    test("renders no items on menu", () => {
      const menuItems = [];

      const component = shallow(
        <Menu menuItems={menuItems} clickHandler={() => {}} isActive={false} />
      );

      expect(component.find(".navbar-start").children().length).toEqual(0);
    });
  });

  describe("when menuItems is given", () => {
    test("renders items on menu", () => {
      const component = shallow(
        <Menu menuItems={menuItems} clickHandler={() => {}} isActive={false} />
      );

      expect(component.find(".navbar-start").children().length).toEqual(2);
    });
  });

  describe("when menu is active", () => {
    test("has the properly className", () => {
      const component = shallow(
        <Menu menuItems={menuItems} clickHandler={() => {}} isActive={true} />
      );

      expect(component.find(".navbar-menu.is-active").length).toEqual(1);
    });
  });

  describe("when each menu item is cliked", () => {
    test("triggers a callback", () => {
      const clickHandler = jest.fn();

      const component = shallow(
        <Menu
          menuItems={menuItems}
          clickHandler={clickHandler}
          isActive={false}
        />
      );

      component
        .find(".navbar-start")
        .find(NavLink)
        .map(node => node.simulate("click"));

      expect(clickHandler).toHaveBeenCalledTimes(2);
    });
  });
});
