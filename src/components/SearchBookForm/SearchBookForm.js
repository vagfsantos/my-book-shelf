import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBookForm extends Component {
  static propTypes = {
    onChangeHandler: PropTypes.func.isRequired
  };

  state = {
    userSearchText: ""
  };

  onSubmitSearch = event => {
    event && event.preventDefault();

    const {
      onChangeHandler = () =>
        console.warn(
          "No change handler was given to <SeachBookForm /> component."
        )
    } = this.props;
    const searchText = this.state.userSearchText;
    onChangeHandler(searchText);
  };

  onChangeInput = ({ target: { value } }) => {
    this.setState(
      {
        userSearchText: value
      },
      this.onSubmitSearch
    );
  };

  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <form onSubmit={this.onSubmitSearch}>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  onChange={this.onChangeInput}
                  className="input"
                  type="text"
                  placeholder="Search a book..."
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-search" />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBookForm;
