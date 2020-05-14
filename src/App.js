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
        completed: false,
      },
      {
        id: 4,
        title: "Iron the suit and polish the boots",
        completed: false,
      },
    ],
  };

  //Complete toggle
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
