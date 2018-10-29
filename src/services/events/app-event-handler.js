import PubSub from "pubsub-js";

const EVENTS = {
  BOOK_SHELF_HAS_CHANGED: "shelf.statuses.has.change",
  BOOKS_WERE_REARRENGED: "shelf.were.rearrenged",
  SEARCH_HAS_COMPLETED: "search.has.completed"
};

export const appEvent = {
  whenBookStatusChange(callback = () => {}) {
    PubSub.subscribe(
      EVENTS.BOOK_SHELF_HAS_CHANGED,
      (message, shelfStatuses) => {
        callback(shelfStatuses);
      }
    );
  },

  bookStatusHasChanged(shelfStatuses) {
    PubSub.publish(EVENTS.BOOK_SHELF_HAS_CHANGED, shelfStatuses);
  },

  whenBooksWereRearrenged(callback = () => {}) {
    PubSub.subscribe(EVENTS.BOOKS_WERE_REARRENGED, (message, shelfStatuses) => {
      callback(shelfStatuses);
    });
  },

  booksWereRearrenged(books) {
    PubSub.publish(EVENTS.BOOKS_WERE_REARRENGED, books);
  },

  whenSearchHasCompleted(callback = () => {}) {
    PubSub.subscribe(EVENTS.SEARCH_HAS_COMPLETED, (message, books) => {
      callback(books);
    });
  },

  searchHasCompleted(books) {
    PubSub.publish(EVENTS.SEARCH_HAS_COMPLETED, books);
  }
};
