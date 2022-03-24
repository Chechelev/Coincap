import React, { Component } from 'react';
import './App.scss';

import { Header } from '../header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
}

export default App;
