import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookie",
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <h1>
          Hello
        </h1>
      </div>
    );
  }
}

export default App;
