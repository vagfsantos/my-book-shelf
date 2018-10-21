import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import * as booksAPIService from "../services/api/books-api";
import { shelfFilter } from "../services/shelf/shelf-filter";

import Header from "./header/Header";
import Shelf from "./shelf/Shelf";

import "../styles/main.scss";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    booksAPIService
      .getAll()
      .then(books => {
        this.setState({
          books
        });
        return books;
      })
      .then(console.log);
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <section className="hero is-link is-fullheight is-medium">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title is-1">Welcome to your shelf book</h1>
                <h2 className="subtitle">This is your shelf</h2>
              </div>
            </div>
          </section>

          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column">
                  <Shelf
                    title="Currently Reading"
                    books={shelfFilter.getCurrentlyReading(this.state.books)}
                    slotsByRow={1}
                  />
                </div>
              </div>
            </section>

            <section className="section">
              <div className="columns">
                <div className="column">
                  <Shelf
                    title="Want to Read"
                    books={shelfFilter.getWantToRead(this.state.books)}
                    slotsByRow={3}
                  />
                </div>
                <div className="column is-one-quarter">
                  <Shelf
                    title="Already Read"
                    books={shelfFilter.getAlreadyRead(this.state.books)}
                    slotsByRow={1}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
