import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import apiKey from './config';


import Trains from './components/Trains';
import Planes from './components/Planes';
import Automobiles from './components/Automobiles';
import Search from './components/Search';
import Container from './components/Container';


class App extends Component {

  render() { 
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" render={ () => (<Search api={ apiKey } query={'waterfalls'} />) } />
            <Route path="/planes" render={ () => (<Planes api={ apiKey } />) } />
            <Route path="/trains" render={ () => (<Trains api={ apiKey } />) } />
            <Route path="/automobiles" render={ () => (<Automobiles api={ apiKey } />) } />
            <Route exact path="/:id" render={ (props) => (<Container api={ apiKey } query={ props.match.params.id } />) } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;