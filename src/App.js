import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="app">
        <div className="view color1 active">
          <div className="header"><i className="fas fa-bars"></i></div>
          <div className="main">
            Home
          </div>
        </div>
        <div className="view color2">
          <div className="header"><i className="fas fa-times"></i></div>
          <div className="main">
            Cart
          </div>
        </div>
        <div className="view color3">
          <div className="header"><i className="fas fa-times"></i></div>
          <div className="main">
            Order
          </div>
        </div>
        <div className="view color4">
          <div className="header"><i className="fas fa-times"></i></div>
          <div className="main">
            Login
          </div>
        </div>
        <div className="view color5">
          <div className="header"><i className="fas fa-times"></i></div>
          <div className="main">
            Contact
          </div>
        </div>
	    </div>
    );
  }
}

export default App;
