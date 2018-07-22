import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AsyncApp from './AsyncApp'
import logo from './logo.svg';
import './App.css';

const store = configureStore()


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Provider store={store}>
          <AsyncApp />
        </Provider>
      </div>
    );
  }
}

export default App;
