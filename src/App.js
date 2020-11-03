import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'Chris', age: 23 },
      { name: 'David', age: 24 },
      { name: 'Ian', age: 28 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Christopher';
    this.setState( {
      persons: [
        { name: newName, age: 23 },
        { name: 'David', age: 24 },
        { name: 'Ian', age: 28 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: "Chris", age: 23 },
        { name: event.target.value, age: 29 },
        { name: 'Ian', age: 28 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}) ;
  }

  render () {

    let persons = null;

    if ( this.state.showPersons ) {
              persons = (
      <div>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Chris!')}
        changed={this.nameChangedHandler} >My Hobbies: Gaming</Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello my name is {this.state.persons[0].name}</h1>
        <button onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
        {persons}
        <UserInput 
          changed={this.usernameChangedHandler} 
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.persons[0].name} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
