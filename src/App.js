import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: Math.floor(Math.random() * 30) },
      { name: 'Mix', age: Math.floor(Math.random() * 30) },
      { name: 'Mex', age: Math.floor(Math.random() * 30) }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // Use slice() in order to create a copy of the original array to avoid unpredictable behavior
    const persons = [...this.state.persons] // spread function [...] obtains the same result as slice()
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: Math.floor(Math.random() * 100) },
        { name: event.target.value, age: Math.floor(Math.random() * 100) },
        { name: event.target.value, age: Math.floor(Math.random() * 100) }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'MAX')}
            changed={this.nameChangedHandler}>
            My Hobby: Eating</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'MIX')}
            changed={this.nameChangedHandler}>
            My Hobby: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, 'MEX')}
            changed={this.nameChangedHandler}>
            My Hobby: Sleeping</Person> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
