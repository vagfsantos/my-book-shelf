import { BOOK_SHELF_STATUS } from "../../enums/books-status";

const { READING, READ, WANT_TO_READ } = BOOK_SHELF_STATUS;

export const shelfFilter = {
  getCurrentlyReading(books = []) {
    return books.filter(book => book.shelf === "currentlyReading");
  },

  getWantToRead(books = []) {
    return books.filter(book => book.shelf === "wantToRead");
  },

  getAlreadyRead(books = []) {
    return books.filter(book => book.shelf === "read");
  },

  rearrangeBooksByShelf(shelfStatuses, currentBooks) {
    const books = [...currentBooks];
    const currentlyReading = shelfStatuses[READING];
    const wantToRead = shelfStatuses[WANT_TO_READ];
    const read = shelfStatuses[READ];

    const findBook = (bookID, shelfName) => {
      const foundBook = books.find(book => book.id === bookID);
      if (foundBook) {
        foundBook.shelf = shelfName;
      }
    };

    currentlyReading.forEach(bookID => findBook(bookID, READING));

    wantToRead.forEach(bookID => findBook(bookID, WANT_TO_READ));

    read.forEach(bookID => findBook(bookID, READ));

    return books;
  },

  getNewBooks(shelfStatuses, currentBooks) {
    const books = [...currentBooks];
    const allBookIds = [
      ...shelfStatuses[READING],
      ...shelfStatuses[WANT_TO_READ],
      ...shelfStatuses[READ]
    ];

    const foundBooknNewBook = allBookIds.find(
      id => !books.find(book => book.id === id)
    );
    return foundBooknNewBook;
  }
};
