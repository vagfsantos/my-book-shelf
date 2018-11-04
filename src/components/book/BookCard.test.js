import React from "react";
import { shallow } from "enzyme";

import BookCard from "./BookCard";

import BookImage from "./components/BookImage";
import BookInfo from "./components/BookInfo";
import BookStatus from "./components/BookStatus";
import BookTags from "./components/BookTags";

describe("<BookCard />", () => {
  test("renders a BookCard", () => {
    const bookInfo = {
      id: "id",
      title: "title",
      subtitle: "subtitle",
      description: "description",
      imageLinks: { thumbnail: "thumbnail" },
      categories: []
    };
    const onBookStatusChange = () => {};

    const component = shallow(
      <BookCard bookInfo={bookInfo} onBookStatusChange={onBookStatusChange} />
    );

    expect(component.find(BookImage).length).toEqual(1);
    expect(component.find(BookInfo).length).toEqual(1);
    expect(component.find(BookStatus).length).toEqual(1);
    expect(component.find(BookTags).length).toEqual(1);
  });
});
