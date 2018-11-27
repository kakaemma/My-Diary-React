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

export default App;
