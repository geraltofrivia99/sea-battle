import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './redux';

import Routes from './Router';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
)

export default App;
