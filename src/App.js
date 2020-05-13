import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take shiro for walk",
        completed: false,
      },
      {
        id: 2,
        title: "Do laundary",
        completed: false,
      },
      {
        id: 3,
        title: "Make some delicious fried rice",
        completed: true,
      },
      {
        id: 4,
        title: "Iron the suit and polish the boots",
        completed: false,
      },
    ],
  };
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
