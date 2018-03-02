import React, { Component } from 'react';
import './App.css';
import router from './router'
import reallySmoothScroll from 'really-smooth-scroll';

reallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div className ='test'>
        {router}
      </div>
    );
  }
}

export default App;
