import React, { Component } from "react";

import BookEntity from "./entity/BookEntity";

import BookImage from "./components/BookImage";
import BookInfo from "./components/BookInfo";
import BookTags from "./components/BookTags";

class BookCard extends Component {
  render() {
    const {
      title = "",
      subtitle = "",
      description = "",
      categories = [],
      imageLinks: { thumbnail = "" }
    } = this.props.bookInfo;

    return (
      <div className="box has-background-light">
        <div className="media">
          <BookImage imageURL={thumbnail} imageDescription={title} />
          <div className="media-content">
            <BookInfo
              title={title}
              subtitle={subtitle}
              description={description}
            />
            <BookTags categories={categories} />
            <div>
              <a class="button is-info is-outlined">
                <span class="icon is-small">
                  <i class="fas fa-book-reader" />
                </span>
                <span>Reading</span>
              </a>
              <a class="button is-danger is-outlined">
                <span class="icon is-small">
                  <i class="fas fa-grin-hearts" />
                </span>
                <span>Want to read</span>
              </a>
              <a class="button is-primary is-outlined">
                <span class="icon is-small">
                  <i class="fas fa-book" />
                </span>
                <span>Read</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BookCard.propTypes = {
  bookInfo: BookEntity.isRequired
};

export default BookCard;
