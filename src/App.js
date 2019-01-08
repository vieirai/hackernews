import React, { Component } from 'react';
import './App.css';
import NewsList from './components/NewsList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hacker <code>News!</code>
          </p>
        </header>
        <NewsList/>
      </div>
    );
  }
}

export default App;
