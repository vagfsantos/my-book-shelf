import React from "react";
import BookInfo from "./BookInfo";
import { shallow } from "enzyme";

describe("<BookInfo />", () => {
  test("renders the title, subtitle and description", () => {
    const title = "title";
    const subtitle = "subtitle";
    const description = "description";

    const component = shallow(
      <BookInfo title={title} subtitle={subtitle} description={description} />
    );

    expect(component.find(".title").text()).toEqual(title);
    expect(component.find(".subtitle").text()).toEqual(subtitle);
    expect(component.find(".content").text()).toEqual(`${description}...`);
  });
});
