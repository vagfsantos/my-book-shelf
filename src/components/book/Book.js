import React from "react";

const Book = props => (
  <div className="box">
    <div className="media">
      <div className="media-left">
        <figure className="image">
          <img src={props.cardContent.imageLinks.thumbnail} alt="Placeholder" />
        </figure>
      </div>
      <div className="media-content">
        <div className="media-content">
          <p className="title is-4">{props.cardContent.title}</p>
          <p className="subtitle is-6">{props.cardContent.subtitle}</p>
          <div className="content">'aa'</div>
          {props.cardContent.categories &&
            props.cardContent.categories.map((category, index) => (
              <span key={index} className="tag is-link">
                {category.toLowerCase()}
              </span>
            ))}
        </div>
      </div>
    </div>
  </div>
);

export default Book;
