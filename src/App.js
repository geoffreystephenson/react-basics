import React from 'react';
import logo from './logo.svg';
import './cssreset.css';
import './App.css';

function App() {
  const name = "Geoffrey Stephenson"
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit {name} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.geoffreystephenson.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
