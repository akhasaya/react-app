import React, {Component} from 'react';
import './App.css';
import TClogo from './iphone-truecaller.png';
import Articles from './components/Articles';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div>
            <img className="App-logo"  src={TClogo} alt="TC Logo" />
          </div>
        </header>
        <div className="Word-press">
          <Articles />
        </div>
      </div>
    );
  }
}

export default App;
