import PubSub from "pubsub-js";

const EVENTS = {
  BOOK_SHELF_HAS_CHANGED: "shelf.statuses.has.change"
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
  }
};
