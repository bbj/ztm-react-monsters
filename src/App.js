import React from "react";

import { CardList } from "./components/card-list/card-list.component";

import "./App.css";         //this is more instruction for babel,webpack

class App extends React.Component {
  constructor() { //optional, but due to call of super(), we need it
    super(); //call constructor of parent class: Component (mandatory) 
    this.state = {
      monsters: [],
    };
  }

  /**
   * LifeCycle method, called when React has put this component on the page, 
   * for the first time
   */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) //convert Response to JSON
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <CardList name='Bruno'>
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name} </h1>
          ))}
			  </CardList>
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
