import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import { Container } from 'semantic-ui-react';

class MyBooks extends Component {

  render() {
    return (
      <Container>
        Mybooks
      </Container>
    );
  }
}

// Create a new component that is "connected" to the router.
export default (MyBooks)
