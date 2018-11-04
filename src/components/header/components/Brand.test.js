import React from "react";
import { shallow } from "enzyme";

import Brand from "./Brand";

describe("<Brand />", () => {
  test("renders brand on menu", () => {
    const brandImagePath = "imgPath";
    const brandName = "brandName";

    const component = shallow(
      <Brand brandImagePath={brandImagePath} brandName={brandName}>
        <div>text</div>
      </Brand>
    );

    expect(
      component.find(`img[src='${brandImagePath}'][alt='${brandName}']`).length
    ).toEqual(1);
    expect(component.text()).toEqual("<Link />text");
  });
});
