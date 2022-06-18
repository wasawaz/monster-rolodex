import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstname: "wasap204", lastname: "pruthi" },
      company: "x10",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Hi {this.state.name.firstname} {this.state.name.lastname}, I work at{" "}
            {this.state.company}
          </h1>
          <button
            onClick={() => {
              this.setState(() => {
                return {
                  name: { firstname: "wasawat", lastname: "pruthipunyaskul" },
                };
              });
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
