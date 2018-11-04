import React from "react";
import { shallow } from "enzyme";

import BookStatus from "./BookStatus";
import ButtonStatusButton from "./BookStatusButton";

describe("<BookStatus />", () => {
  test("renders three ButtonStatusButton", () => {
    const bookID = "id123";
    const activeShelf = "read";
    const onBookStatusChange = () => {};

    const component = shallow(
      <BookStatus
        bookID={bookID}
        activeShelf={activeShelf}
        onBookStatusChange={onBookStatusChange}
      />
    );

    expect(component.find(ButtonStatusButton).length).toEqual(3);
  });
});
