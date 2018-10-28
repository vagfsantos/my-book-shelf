import React from "react";

import Shelf from "./../shelf/Shelf";

const SearchPage = () => (
  <div>
    <section className="hero is-link is-small">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Search</h1>
          <h2 className="subtitle">Type your book</h2>

          <form>
            <input />
            <button>Buscar</button>
          </form>
        </div>
      </div>
    </section>

    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column">
            <Shelf books={[]} slotsByRow={1} />
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default SearchPage;
