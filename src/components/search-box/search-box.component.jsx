import { Component } from "react";

import "./search-box.styles.css";

class Searchbox extends Component {
  render() {
    const { onSearchChangeHandler, placeHolder, className } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeHolder}
        onChange={onSearchChangeHandler}
      />
    );
  }
}

export default Searchbox;
