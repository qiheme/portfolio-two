import React from 'react';
import MenuAppBar from '../MenuAppBar/MenuAppBar';
import Card from '../Card/Card';
import logo from '../../images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuAppBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section className="App-description">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </div>
  );
}

export default App;
