import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Visibility } from 'semantic-ui-react';
import IoGithub from 'react-icons/lib/io/social-github';
import IoLinkedin from 'react-icons/lib/io/social-linkedin';

class Footer extends Component {
  render() {
    return (
      <div>
      <Divider section />
      <Segment vertical style={{ marginTop: '0em', paddingTop: '0em', paddingBottom: '0em' }}>
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
                <a className="grey-text text-lighten-3" href="https://www.github.com/tshin7"><IoGithub size="34"/></a>
                <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/tshin7/"><IoLinkedin size="34"/></a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </div>
    )
  }
}

// Create a new component that is "connected" to the router.
export default (Footer)
