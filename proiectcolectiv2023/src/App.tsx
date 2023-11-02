import React from 'react';
// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="backgroundImage">
      <Navbar />
      <div className="content">
        <p className="textStyleBack"> "Where every dish is a wish" </p>
        <p className="textStyleFront"> "Where every dish is a wish" </p>
        <div className="rectangleLeft"></div>
        <div className="rectangleRight"></div>
      </div>
      </div>
  );
}

export default App;
