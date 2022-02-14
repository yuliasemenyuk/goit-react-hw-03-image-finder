import React, { Component } from "react";
import propTypes from "prop-types";
import style from "./Searchbar.module.css";

export default class Searchbar extends Component {
  onSubmit = (evt) => {};

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm}>
          <button type="submit" className={style.SearchForm_button}>
            <span className={style.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={style.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
