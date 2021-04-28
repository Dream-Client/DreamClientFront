import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="/test"
          target="_self"
          rel="noopener noreferrer"
        >
          Test
        </a>
        <Link to="/test">Test</Link>
      </header>
    </div>
  );
}

export default HomePage;
