import { shelfFilter } from "./shelf-filter";
import { BOOK_SHELF_STATUS } from "../../enums/books-status";

const { READING, READ, WANT_TO_READ } = BOOK_SHELF_STATUS;

const books = [
  {
    id: "1",
    shelf: WANT_TO_READ
  },
  {
    id: "2",
    shelf: READING
  },
  {
    id: "3",
    shelf: READ
  }
];

describe("shelfFilter", () => {
  describe("getCurrentlyReading", () => {
    test("returns the currently reading books", () => {
      const reading = shelfFilter.getCurrentlyReading(books);

      expect(reading).toHaveLength(1);
    });
  });

  describe("getWantToRead", () => {
    test("returns the want to read books", () => {
      const wantToRead = shelfFilter.getWantToRead(books);

      expect(wantToRead).toHaveLength(1);
    });
  });

  describe("getAlreadyRead", () => {
    test("returns the already read books", () => {
      const read = shelfFilter.getAlreadyRead(books);

      expect(read).toHaveLength(1);
    });
  });

  describe("rearrangeBooksByShelf", () => {
    test("rearrenge books to 'current reading' shelf", () => {
      const backEndResponse = {
        [READING]: ["1", "2", "3"]
      };

      const rearrengedBooks = shelfFilter.rearrangeBooksByShelf(
        backEndResponse,
        books
      );

      expect(rearrengedBooks.every(b => b.shelf === READING)).toBeTruthy();
    });

    test("rearrenge books to 'wanto to read' shelf", () => {
      const backEndResponse = {
        [WANT_TO_READ]: ["1", "2", "3"]
      };

      const rearrengedBooks = shelfFilter.rearrangeBooksByShelf(
        backEndResponse,
        books
      );

      expect(rearrengedBooks.every(b => b.shelf === WANT_TO_READ)).toBeTruthy();
    });

    test("rearrenge books to 'read' shelf", () => {
      const backEndResponse = {
        [READ]: ["1", "2", "3"]
      };

      const rearrengedBooks = shelfFilter.rearrangeBooksByShelf(
        backEndResponse,
        books
      );

      expect(rearrengedBooks.every(b => b.shelf === READ)).toBeTruthy();
    });
  });

  describe("getNewBooks", () => {
    test("returns the new book id added", () => {
      const backEndResponse = {
        [READ]: ["4"],
        [READING]: ["2"]
      };

      const newBookAddedId = shelfFilter.getNewBooks(backEndResponse, books);

      expect(newBookAddedId).toEqual("4");
    });
  });
});
