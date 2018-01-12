import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import AllBooks from './AllBooks';
import MyBooks from './MyBooks';
import Settings from './Settings';
import Login from './Login';
import Signup from './Signup';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/allbooks' component={ AllBooks } />
          <Route exact path='/mybooks' component={ MyBooks }/>
          <Route exact path='/settings' component={ Settings }/>
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signup' component={ Signup } />
        </Switch>
      </main>
    );
  }
}
