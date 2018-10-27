import React, { Component } from "react";
import PropTypes from "prop-types";

import ButtonStatusButton from "./BookStatusButton";

import { BOOK_SHELF_STATUS } from "../../../enums/books-status";
import * as booksAPIService from "../../../services/api/books-api";
import { appEvent } from "../../../services/events/app-event-handler";

const { READING, WANT_TO_READ, READ } = BOOK_SHELF_STATUS;

class BookStatus extends Component {
  static propTypes = {
    bookID: PropTypes.string.isRequired,
    activeShelf: PropTypes.string.isRequired
  };

  onChangeShelf(shelf) {
    booksAPIService
      .update({ id: this.props.bookID }, shelf)
      .then(appEvent.bookStatusHasChanged);
  }

  isButtonActivated(shelf) {
    return shelf === this.props.activeShelf ? true : false;
  }

  render() {
    return (
      <div className="shelf-status-box">
        <ButtonStatusButton
          onClickHandler={() => {
            this.onChangeShelf(READING);
          }}
          theme="is-info"
          icon="fa-book-reader"
          isActive={this.isButtonActivated(READING)}
        >
          Reading
        </ButtonStatusButton>

        <ButtonStatusButton
          onClickHandler={() => {
            this.onChangeShelf(WANT_TO_READ);
          }}
          theme="is-danger"
          icon="fa-grin-hearts"
          isActive={this.isButtonActivated(WANT_TO_READ)}
        >
          Want to read
        </ButtonStatusButton>

        <ButtonStatusButton
          onClickHandler={() => {
            this.onChangeShelf(READ);
          }}
          theme="is-primary"
          icon="fa-book"
          isActive={this.isButtonActivated(READ)}
        >
          Read
        </ButtonStatusButton>
      </div>
    );
  }
}

export default BookStatus;
