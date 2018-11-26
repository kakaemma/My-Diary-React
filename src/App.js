<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
=======
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Routes from './components/routes';
import './assets/App.css';

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </React.Fragment>
  </Provider>
);
>>>>>>> d852d14... chore(setup project): setup react project for mydiary  …

export default App;
