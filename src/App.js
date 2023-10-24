import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { Cardlist } from "./components/cardlists/card-lists";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resolve) => resolve.json())
      .then((user) => this.setState({ monsters: user }));
  }

  render() {
    const { monsters, searchfield } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        <input
          className="ok"
          type="search"
          placeholder="Search Monster"
          onChange={(e) => {
            this.setState({ searchfield: e.target.value }, () =>
              console.log(this.state)
            );
          }}
        />

        <Cardlist monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
