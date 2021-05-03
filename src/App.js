import React, { Component } from 'react';
import './App.css';
import './components/button.style.css';
import { Card } from './components/card.component';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      fact: {}
    };
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(joke => this.setState({ fact: joke }));
  }

  handleClick() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(joke => this.setState({ fact: joke }));
  }

  render() {
    const { fact } = this.state;
    return (
      <div className="App">
      <h1>Retrieve a random chuck joke</h1>
      <button className='button' onClick={this.handleClick}>Go!</button>
      <Card fact={fact}/>
      </div>
    );
  }
} 


export default App;