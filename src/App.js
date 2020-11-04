import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Chris', age: 23 },
      { id: '2', name: 'David', age: 24 },
      { id: '3', name: 'Ian', age: 28 }
    ],
    otherState: 'some other value',
    showPersons: false,

    userInput: ''
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}) ;
  }

  inputChangedHandler = ( event ) => {
    this.setState( { userInput: event.target.value } );
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render () {

    let persons = null;

    if ( this.state.showPersons ) {
              persons = (
      <div>
      {this.state.persons.map((person, index) => {
        return <Person 
        click={() => this.deletePersonHandler(index)}
        name={person.name} 
        age={person.age}
        key={person.id}
        changed={(event) => this.nameChangedHandler(event,person.id)}
        />
      })}
      </div>
      );
    }

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

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
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
