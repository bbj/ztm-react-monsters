import React, { Component } from "react";
import "./App.css";         //this is more instruction for babel,webpack
                            //does not really import anything!

class App extends Component {
  constructor() { //optional, but due to call of super(), we need it
    super(); //call constructor of parent class: Component (mandatory) 
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asr2'
        },
        {
          name: 'Zombie',
          id: 'as1w'
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </div>
    );
  }
}

export default App;

/*
  className: 
      cannot use "class" reserved to ES classes or CSS
      it is a JSX attribute
  onClick: 
      cannot use "onclick" reserved to HTML
      it is a JSX attribute too
      JSX is trying to "mimic" HTML ... 
  this.setState({...})
      we are not allowed to modify this.state
      unidirectional!!!
      only way is to call this.setState()
      THEN render() is called again, as state changed
*/
