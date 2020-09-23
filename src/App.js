import React, {Component} from 'react';
import './App.css';
import TClogo from './iphone-truecaller.png';
import Articles from './components/Articles';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Posts from './components/Posts.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="App-header">
            <div>
              <img className="App-logo"  src={TClogo} alt="TC Logo" />
            </div>
          </header>
          <Switch>
            <Route path='/' exact component={Articles} />
            <Route path='/posts/:id' component={Posts} /> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
