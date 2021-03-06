import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
import axios from 'axios';
import { Button, Container, Menu } from 'semantic-ui-react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    // initial active values of menu buttons
    this.state = {
      activeStates: {
        homeActive: true,
        allbooksActive: false,
        mybooksActive: false,
        settingsActive: false,
        loginActive: false,
        signupActive: false,
        logoutActive: false
      }
    };
  }

  // handle navbar buttons to change active state to clicked button
  handleNavbarButtonClick = event => {
    let activeStates = this.state.activeStates;
    // reset all active states to false
    for (let prop in activeStates) {
      activeStates[prop] = false;
    }
    console.log('id: ' + event.target.id);
    // set currently clicked button to true
    activeStates[event.target.id + 'Active'] = true;
    console.log(activeStates);
    this.setState(activeStates);
  };

  handleLogoutButtonClick = event => {
    let activeStates = this.state.activeStates;
    // reset all active states to false
    for (let prop in activeStates) {
      activeStates[prop] = false;
    }
    // set currently clicked button to true
    activeStates[event.target.id + 'Active'] = true;
    this.setState(activeStates);

    const self = this;
    // check if user is logged in
    axios.get('/api/user/logout')
      .then(function(res) {
        console.log(res.data);
        self.props.checkIfUserLoggedIn();
        self.props.history.push('/');
      })
      .catch(function (error) {
        console.log(error);
      });


  };

  render() {
    const authenticated = this.props.authenticated;
    if (authenticated) {
      return (
        <Menu inverted>
          <Container>
            <Menu.Item as={ Link } to='/' header onClick={ this.handleNavbarButtonClick } >
              Books Marketplace
            </Menu.Item>
            <Menu.Item as={ Link } to='/home' active={ this.state.activeStates.homeActive } onClick={ this.handleNavbarButtonClick } id="home">Home</Menu.Item>
            <Menu.Item as={ Link } to='/allbooks' active={ this.state.activeStates.allbooksActive } onClick={ this.handleNavbarButtonClick } id="allbooks">All Books</Menu.Item>
            <Menu.Item as={ Link } to='/mybooks' active={ this.state.activeStates.mybooksActive } onClick={ this.handleNavbarButtonClick } id="mybooks">My Books</Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item>
                <Button active={ this.state.activeStates.logoutActive } onClick={ this.handleLogoutButtonClick } id="logout" primary>Logout</Button>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      );
    }

    // not authenticated
    return (
      <Menu inverted style={{ marginBottom: 0, borderRadius: 0 }}>
        <Container>
          <Menu.Item as={ Link } to='/' header onClick={ this.handleNavbarButtonClick } >
            Books Marketplace
          </Menu.Item>
          <Menu.Item as={ Link } to='/' active={ this.state.activeStates.homeActive } onClick={ this.handleNavbarButtonClick } id="home">Home</Menu.Item>
          <Menu.Item as={ Link } to='/allbooks' active={ this.state.activeStates.allbooksActive } onClick={ this.handleNavbarButtonClick } id="allbooks">All Books</Menu.Item>
          <Menu.Item as={ Link } to='/mybooks' active={ this.state.activeStates.mybooksActive } onClick={ this.handleNavbarButtonClick } id="mybooks">My Books</Menu.Item>
          <Menu.Item as={ Link } to='/settings' active={ this.state.activeStates.settingsActive } onClick={ this.handleNavbarButtonClick } id="settings">Settings</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item className='item'>
              <Button as={ Link } to='/login' active={ this.state.activeStates.loginActive } onClick={ this.handleNavbarButtonClick } id="login">Log in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button as={ Link } to='/signup' active={ this.state.activeStates.signupActive } onClick={ this.handleNavbarButtonClick } id="signup" primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

// Create a new component that is "connected" to the router.
export default Navbar;
