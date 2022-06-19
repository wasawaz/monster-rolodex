import "./search-box.styles.css";

const Searchbox = ({ onSearchChangeHandler, placeHolder, className })=>{
    return (
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeHolder}
          onChange={onSearchChangeHandler}
        />
      );
}

export default Searchbox;
