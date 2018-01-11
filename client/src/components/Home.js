import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
// import axios from 'axios';
import { Button, Container, Grid, Header, Icon, Segment } from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <div>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 350 }}
          vertical
        >
          <Container text>
            <Header
              as='h1'
              content='Books Marketplace'
              inverted
              style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '0.75em' }}
            />
            <Header
              as='h2'
              content='Trade books here.'
              inverted
              style={{ fontSize: '1.7em', fontWeight: 'normal' }}
            />
            <Button primary size='huge'>
              Get Started
              <Icon name='right arrow' />
            </Button>
          </Container>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable >
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '1.5em' }}>See all books available to borrow</Header>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '1.5em' }}>Request to trade books from other users</Header>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '1.5em' }}>Catalogue books you want to trade</Header>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '1.5em' }}>Manage books you own and trade requests from your dashboard</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}

// Create a new component that is "connected" to the router.
export default (Home)
