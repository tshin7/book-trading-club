import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsParams: {
        currentPassword: '',
        newPassword: '',
        repeatNewPassword: ''
      }
    };
  }

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({
      settingsParams: {
        ...this.state.settingsParams,
        [event.target.name]: event.target.value
      }
    });
  };

  handleFormSubmit = event => {
    console.log(this.state.settingsParams);

    // Prevent form default behavior
    event.preventDefault();
  }

  render() {
    return (
      <div className='signup-form'>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' textAlign='center'>
              Change password
            </Header>
            <Form size='large' onSubmit={ this.handleFormSubmit }>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Current Password'
                  type='password'
                  value={ this.state.settingsParams.currentPassword }
                  onChange={ this.handleInputChange }
                  name='currentPassword'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='New Password'
                  type='password'
                  value={ this.state.settingsParams.newPassword }
                  onChange={ this.handleInputChange }
                  name='newPassword'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Repeat New Password'
                  type='password'
                  value={ this.state.settingsParams.repeatNewPassword }
                  onChange={ this.handleInputChange }
                  name='repeatNewPassword'
                />
                <Button color='blue' fluid size='large'>Save changes</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

// Create a new component that is "connected" to the router.
export default Settings;
