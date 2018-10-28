import React from "react";

import Shelf from "./../shelf/Shelf";

const SearchPage = () => (
  <div>
    <section className="hero is-link is-small">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">Search</h1>
          <h2 className="subtitle">Type your book</h2>

          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <form>
                <div class="field">
                  <div class="control has-icons-left has-icons-right">
                    <input
                      class="input is-success"
                      type="text"
                      placeholder="Text input"
                      value="bulma"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-search" />
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
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
