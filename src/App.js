import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Phones from './components/Phones';
import Huaweis from './components/Huaweis';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <Phones />
        <Huaweis />
      </main>
    );
  }
}

export default App;
