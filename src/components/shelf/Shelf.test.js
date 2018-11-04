import React from "react";
import { shallow } from "enzyme";

import Shelf from "./Shelf";
import LoadingShelf from "./LoadingShelf";
import EmptyShelf from "./EmptyShelf";
import BookCard from "./../book/BookCard";

const books = [
  {
    id: "id",
    title: "title",
    subtitle: "subtitle",
    description: "description",
    imageLinks: { thumbnail: "thumbnail" },
    categories: []
  },
  {
    id: "id",
    title: "title",
    subtitle: "subtitle",
    description: "description",
    imageLinks: { thumbnail: "thumbnail" },
    categories: []
  }
];
const slotsByRow = 1;
const onBookStatusChange = () => {};

describe("<Shelf />", () => {
  describe("when has title", () => {
    test("renders the shelf title", () => {
      const title = "title";

      const component = shallow(
        <Shelf
          title={title}
          books={books}
          slotsByRow={slotsByRow}
          onBookStatusChange={onBookStatusChange}
        />
      );

      expect(component.find(".title").length).toEqual(1);
    });
  });

  describe("when is hidden", () => {
    test("renders nothing", () => {
      const component = shallow(
        <Shelf
          isHidden={true}
          books={books}
          slotsByRow={slotsByRow}
          onBookStatusChange={onBookStatusChange}
        />
      );

      expect(component.children().exists()).toBeFalsy();
    });
  });

  describe("when is loading", () => {
    test("renders nothing", () => {
      const component = shallow(
        <Shelf
          isLoading={true}
          books={[]}
          slotsByRow={slotsByRow}
          onBookStatusChange={onBookStatusChange}
        />
      );

      expect(component.find(LoadingShelf).exists()).toBeTruthy();
    });
  });

  describe("when has no books", () => {
    test("renders empty shelf", () => {
      const component = shallow(
        <Shelf
          books={[]}
          slotsByRow={slotsByRow}
          onBookStatusChange={onBookStatusChange}
        />
      );

      expect(component.find(EmptyShelf).exists()).toBeTruthy();
    });
  });

  describe("when has books", () => {
    test("renders all BookCards", () => {
      const component = shallow(
        <Shelf
          books={books}
          slotsByRow={slotsByRow}
          onBookStatusChange={onBookStatusChange}
        />
      );

      expect(component.find(BookCard).length).toEqual(books.length);
    });
  });

  describe("when has slotsByRow", () => {
    test("two rows is equals a column of 6", () => {
      const component = shallow(
        <Shelf
          books={books}
          slotsByRow={2}
          onBookStatusChange={onBookStatusChange}
        />
      );

      expect(component.find(".column.is-6").exists()).toBeTruthy();
    });
  });
});
