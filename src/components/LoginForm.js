import React, {Component} from 'react'

import {Button, Card, CardSection, Input} from './common'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  // events
  onChangeHandler (key) {
    return text => {
      this.setState({[key]: text})
    }
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            value={this.state.email}
            placeholder='user@email.com'
            onChangeText={this.onChangeHandler('email')} />
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            value={this.state.password}
            onChangeText={this.onChangeHandler('password')}
            secureTextEntry />
        </CardSection>

        <CardSection>
          <Button text='Log In' />
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
