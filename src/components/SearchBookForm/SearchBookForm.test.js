import React from "react";
import { shallow } from "enzyme";

import SearchBookForm from "./SearchBookForm";

const onChangeHandler = jest.fn();

describe("<SearchBookForm />", () => {
  describe("when a user searchs", () => {
    test("triggers the callback with the inputed text as argument", () => {
      const search = "searching books";
      const component = shallow(
        <SearchBookForm onChangeHandler={onChangeHandler} />
      );

      component
        .find(".input")
        .simulate("change", { target: { value: search } });

      expect(onChangeHandler).toHaveBeenCalledWith(search);
    });
  });
});
