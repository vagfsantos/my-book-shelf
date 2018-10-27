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
    const currentlyReading = shelfStatuses["currentlyReading"];
    const wantToRead = shelfStatuses["wantToRead"];
    const read = shelfStatuses["read"];

    currentlyReading.forEach(bookID => {
      books.find(book => book.id === bookID).shelf = "currentlyReading";
    });

    wantToRead.forEach(bookID => {
      books.find(book => book.id === bookID).shelf = "wantToRead";
    });

    read.forEach(bookID => {
      books.find(book => book.id === bookID).shelf = "read";
    });

    return books;
  }
};
