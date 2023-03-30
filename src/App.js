import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Calculator from './components/pages/calculator';
import Home from './components/pages/home';
import Quote from './components/pages/quote';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
