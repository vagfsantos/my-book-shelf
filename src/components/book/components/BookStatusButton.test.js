import React from "react";
import { shallow } from "enzyme";

import BookStatusButton from "./BookStatusButton";

const theme = "theme";
const icon = "icon";
const isActive = false;
const onClickHandler = jest.fn();

describe("<BookStatusButton />", () => {
  test("renders BookStatusButton", () => {
    const component = shallow(
      <BookStatusButton
        theme={theme}
        icon={icon}
        isActive={false}
        onClickHandler={onClickHandler}
      >
        button
      </BookStatusButton>
    );

    expect(component.find(`.${theme}`).length).toEqual(1);
    expect(component.find(`i.${icon}`).length).toEqual(1);
    expect(component.render().text()).toEqual("button");
  });

  test("renders with inactive style", () => {
    const isActive = false;

    const component = shallow(
      <BookStatusButton
        theme={theme}
        icon={icon}
        isActive={isActive}
        onClickHandler={onClickHandler}
      >
        button
      </BookStatusButton>
    );

    expect(component.find(".is-outlined").length).toEqual(1);
  });

  test("renders with active style", () => {
    const isActive = true;

    const component = shallow(
      <BookStatusButton
        theme={theme}
        icon={icon}
        isActive={isActive}
        onClickHandler={onClickHandler}
      >
        button
      </BookStatusButton>
    );

    expect(component.find(".is-outlined").length).toEqual(0);
  });

  test("triggers callback on click", () => {
    const component = shallow(
      <BookStatusButton
        theme={theme}
        icon={icon}
        isActive={isActive}
        onClickHandler={onClickHandler}
      >
        button
      </BookStatusButton>
    );

    component.simulate("click");
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});
