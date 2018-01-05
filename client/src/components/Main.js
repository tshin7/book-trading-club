import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from './Home';
import AllBooks from './AllBooks';
import MyBooks from './MyBooks';
import Login from './Login';
import Signup from './Signup';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/allbooks' render={(props) => {
            return <AllBooks {...props} />
          }} />
          <Route exact path='/mybooks' render={(props) => {
            return <MyBooks {...props} />
          }} />
          <Route exact path='/login' render={(props) => {
            return <Login {...props} />
          }} />
          <Route exact path='/signup' render={(props) => {
            return <Signup {...props} />
          }} />
        </Switch>
      </main>
    );
  }
}

// <Switch>
//   <Route exact path='/' render={(props) => {
//     return <Home {...props} />
//   }} />
//   <Route exact path='/allbooks' render={(props) => {
//     return <AllBooks {...props} />
//   }} />
//   <Route exact path='/mybooks' render={(props) => {
//     return <MyBooks {...props} />
//   }} />
//   <Route exact path='/login' render={(props) => {
//     return <Login {...props} />
//   }} />
//   <Route exact path='/signup' render={(props) => {
//     return <Signup {...props} />
//   }} />
// </Switch>
