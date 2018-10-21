import React from "react";

import BookEntity from "./entity/BookEntity";

const BookCard = props => (
  <div className="box">
    <div className="media">
      <div className="media-left">
        <figure className="image">
          <img src={props.bookInfo.imageLinks.thumbnail} alt="Placeholder" />
        </figure>
      </div>
      <div className="media-content">
        <div className="media-content">
          <p className="title is-4">{props.bookInfo.title}</p>
          <p className="subtitle is-6">{props.bookInfo.subtitle}</p>
          <div className="content">'aa'</div>
          {props.bookInfo.categories &&
            props.bookInfo.categories.map((category, index) => (
              <span key={index} className="tag is-link">
                {category.toLowerCase()}
              </span>
            ))}
        </div>
      </div>
    </div>
  </div>
);

BookCard.propTypes = {
  bookInfo: BookEntity.isRequired
};

export default BookCard;
