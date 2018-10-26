import React, { Component } from "react";
import PropTypes from "prop-types";
import PubSub from "pubsub-js";

import * as booksAPIService from "../../../services/api/books-api";

class BookStatus extends Component {
  static propTypes = {
    bookID: PropTypes.string.isRequired,
    activeShelf: PropTypes.string.isRequired
  };

  onChangeShelf = shelf => {
    booksAPIService
      .update({ id: this.props.bookID }, shelf)
      .then(shelfStatuses => {
        PubSub.publish("shelf.statuses.has.changed", shelfStatuses);
      });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.onChangeShelf("currentlyReading");
          }}
          className={
            (this.props.activeShelf === "currentlyReading"
              ? ""
              : "is-outlined") + " button is-info"
          }
        >
          <span className="icon is-small">
            <i className="fas fa-book-reader" />
          </span>
          <span>Reading</span>
        </button>

        <button
          onClick={() => {
            this.onChangeShelf("wantToRead");
          }}
          href="#"
          className={
            (this.props.activeShelf === "wantToRead" ? "" : "is-outlined") +
            " button is-danger"
          }
        >
          <span className="icon is-small">
            <i className="fas fa-grin-hearts" />
          </span>
          <span>Want to read</span>
        </button>

        <button
          onClick={() => {
            this.onChangeShelf("read");
          }}
          href="#"
          className={
            (this.props.activeShelf === "read" ? "" : "is-outlined") +
            " button is-primary"
          }
        >
          <span className="icon is-small">
            <i className="fas fa-book" />
          </span>
          <span>Read</span>
        </button>
      </div>
    );
  }
}

export default BookStatus;
