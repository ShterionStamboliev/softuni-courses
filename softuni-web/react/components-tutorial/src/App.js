import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Hello, React"/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
