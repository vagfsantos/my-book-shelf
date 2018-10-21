export const shelfFilter = {
  getCurrentlyReading(books = []) {
    return books.filter(book => book.shelf === "currentlyReading");
  },

  getWantToRead(books = []) {
    return books.filter(book => book.shelf === "wantToRead");
  },

  getAlreadyRead(books = []) {
    return books.filter(book => book.shelf === "read");
  }
};
