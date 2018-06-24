import React, { Component } from 'react';
import './App.css';

import List from './components/List';

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
        <List list={this.state.list}/>
      </div>
    );
  }
}

export default App;
