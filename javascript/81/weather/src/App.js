import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {


  getTheWeather = (event) => {
    console.log(event);

    this.setState({
      zipInput: event.target.value
    });
  };


  render()

  const zip = <div>{this.state.zipInput}</div>

  return(
      <div className = "App" >
      <header className="App-header">
        Hello
        <input type="number" onBlur={event => this.getTheWeather(event)} />
        {zip}
      </header>
      </div>
    );
  }
}
