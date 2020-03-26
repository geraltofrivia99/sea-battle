import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './redux';

import Routes from './Router';

const App: React.FC = () => (
  <Provider store={store}>
    <Router basename='/'>
      <Routes />
    </Router>
  </Provider>
)

export default App;
