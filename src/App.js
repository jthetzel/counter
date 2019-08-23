import React from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import store from './redux/store'
import Counter from './Counter'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
      </header>
    </div>
    </Provider>
  );
}

export default App;
