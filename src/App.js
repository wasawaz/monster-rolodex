import { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import Searchbox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
        )
      );
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <Searchbox
          onSearchChangeHandler={onSearchChange}
          placeHolder="search monster"
          className="monster-search-box"
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
