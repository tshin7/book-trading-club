import React, { Component } from 'react';
// import { withRouter } from 'react-router';
import { Container, Grid, Segment } from 'semantic-ui-react';
import IoGithub from 'react-icons/lib/io/social-github';
import IoLinkedin from 'react-icons/lib/io/social-linkedin';

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ marginTop: '0em', paddingTop: '5em', paddingBottom: '0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column width={6}>
                <p>Made with React, Node, Express, and Semantic UI</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>Copyright © 2017 Ted Shin</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <a className="grey-text text-lighten-3" href="https://github.com/tshin7"><IoGithub size="34"/></a>
                <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/tshin7/"><IoLinkedin size="34"/></a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

// Create a new component that is "connected" to the router.
export default (Footer)
