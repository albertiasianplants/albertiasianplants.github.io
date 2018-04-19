import React, {Component} from 'react';
import Landing from './Landing.jsx';
import {Redirect, Route, Switch} from 'react-router-dom';
import Plants from './Plants';
import About from './About';
import {ContactPage} from './ContactPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/plants" component={Plants}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={ContactPage}/>
        <Redirect from='*' to='/' />
      </Switch>
    );
  }
}

export default App;