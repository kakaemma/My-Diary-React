import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';
import Routes from './components/routes';
import './assets/App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <ToastContainer />
        <Routes />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
);

export default App;
