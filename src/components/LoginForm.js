import React, {Component} from 'react'
import {Text} from 'react-native'
import firebase from 'firebase'

import {Button, Card, CardSection, Input} from './common'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: ''
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  // logic

  // events
  onChangeHandler (key) {
    return text => {
      this.setState({[key]: text})
    }
  }

  onSubmitHandler () {
    const {email, password} = this.state

    this.setState({error: ''})

    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {

    }).catch(() => {
      firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {

      }).catch(() => {
        this.setState({error: 'Authentication Failed'})
      })
    })
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            value={this.state.email}
            placeholder='user@email.com'
            onChangeText={this.onChangeHandler('email')}
            onFocus={() => this.setState({error: ''})}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='*********'
            value={this.state.password}
            onChangeText={this.onChangeHandler('password')}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button
            text='Log In'
            onPress={() => this.onSubmitHandler()}
          />
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm
